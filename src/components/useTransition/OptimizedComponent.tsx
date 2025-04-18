import React, { useState, useMemo, useTransition } from "react";
import { FixedSizeList as List } from "react-window";

const generateUsers = (count: number) => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Helen"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `${names[i % names.length]} ${i}`,
    email: `user${i}@example.com`,
  }));
};

const usersData = generateUsers(50000);

export default function OptimizedComponent() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filteredUsers = useMemo(() => {
    const lower = query.toLowerCase();
    return usersData.filter(
      (user) =>
        user.name.toLowerCase().includes(lower) ||
        user.email.toLowerCase().includes(lower)
    );
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => setQuery(value));
  };

  const highlight = (text: string, query: string) => {
    if (!query) return text;
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;
    return (
      <>
        {text.slice(0, index)}
        <mark className="bg-pink-200 text-black">
          {text.slice(index, index + query.length)}
        </mark>
        {text.slice(index + query.length)}
      </>
    );
  };

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const user = filteredUsers[index];
    return (
      <div
        style={style}
        key={user.id}
        className="p-3 border-b border-pink-100 hover:bg-pink-50"
      >
        <p className="font-medium text-gray-800 text-base">
          {highlight(user.name, query)}
        </p>
        <p className="text-sm text-gray-500">{highlight(user.email, query)}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border-2 border-pink-200 shadow-md">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">
          👩‍💻 Massive Search Filter (Virtualized)
        </h1>

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search name or email..."
          className="w-full p-3 mb-4 border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {isPending && (
          <div className="text-pink-500 italic mb-2 text-sm animate-pulse">
            🔄 Filtering...
          </div>
        )}

        {filteredUsers.length === 0 ? (
          <div className="p-4 text-gray-500 italic text-center">No users found.</div>
        ) : (
          <List
            height={500}
            itemCount={filteredUsers.length}
            itemSize={70}
            width="100%"
            className="border-t border-pink-100"
          >
            {Row}
          </List>
        )}
      </div>
    </div>
  );
}