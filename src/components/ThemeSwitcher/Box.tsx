import React, { memo } from "react";

const Box = memo(function Box({
  level,
  theme,
}: {
  level: number;
  theme: string;
}) {
  if (level === 0) return null;

  return (
    <div
      className={`p-2 m-1 rounded-md shadow transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-200"
          : "bg-pink-100 text-gray-800"
      }`}
    >
      <p className="text-sm font-semibold">Level {level}</p>
      <Box level={level - 1} theme={theme} />
    </div>
  );
});

export default Box;
