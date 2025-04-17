import React, {
  useState,
  useTransition,
  useEffect,
  Suspense,
  lazy,
} from "react";
  
const BoxGrid = lazy(() => import("@components/ThemeSwitcher/BoxGrid"));
  
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  const [isPending, startTransition] = useTransition();
  const [showGrid, setShowGrid] = useState(false);
  
  const toggleTheme = () => {
    startTransition(() => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    });
  };
  
  useEffect(() => {
    const id = requestIdleCallback(() => setShowGrid(true));
    return () => cancelIdleCallback(id);
  }, []);
  
  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="mb-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg"
        >
            Toggle Theme
        </button>
      </div>
  
      {isPending && (
        <p className="text-pink-400 italic mb-2">Applying theme...</p>
      )}
  
      {!showGrid ? (
        <div className="grid grid-cols-4 gap-4 animate-pulse">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-pink-200 rounded-lg opacity-40"
            ></div>
          ))}
        </div>
      ) : (
        <Suspense fallback={<p className="text-pink-500">Loading...</p>}>
          <BoxGrid theme={theme} />
        </Suspense>
      )}
    </div>
  );
}
  