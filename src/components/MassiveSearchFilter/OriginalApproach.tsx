import React, { useState, useTransition } from "react";

// 🔧 Fake user generator
const generateUsers = (count: number) => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Helen"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `${names[i % names.length]} ${i}`,
    email: `user${i}@example.com`,
  }));
};

const usersData = generateUsers(2000);

export default function MassiveSearchFilter() {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const lower = value.toLowerCase();
      const filtered = usersData.filter(
        (user) =>
          user.name.toLowerCase().includes(lower) ||
          user.email.toLowerCase().includes(lower)
      );
      setFilteredUsers(filtered);
    });
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

  return (
    <div className="min-h-screen p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border-2 border-pink-200 shadow-md">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">
          👩‍💻 Massive Search Filter (50,000 Users)
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
            🔄 Loading results...
          </div>
        )}

        <div className="max-h-[500px] overflow-y-auto divide-y divide-pink-100 border-t border-pink-100">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-3 hover:bg-pink-50 transition-colors duration-150"
            >
              <p className="font-medium text-gray-800 text-base">
                {highlight(user.name, query)}
              </p>
              <p className="text-sm text-gray-500">
                {highlight(user.email, query)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
