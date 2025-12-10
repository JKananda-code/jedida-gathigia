// app/messages/page.tsx
"use client";
import { useState } from "react";

interface Message {
  name: string;
  tribute: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [tribute, setTribute] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !tribute) return;
    setMessages([...messages, { name, tribute }]);
    setName("");
    setTribute("");
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-6">Friends of Mercy Message Board</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          placeholder="Write your tribute..."
          value={tribute}
          onChange={(e) => setTribute(e.target.value)}
          className="w-full border rounded px-4 py-2 h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Tribute
        </button>
      </form>

      {/* Display Messages */}
      <div className="space-y-6">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <p className="font-semibold text-gray-900">{msg.name}</p>
            <p className="text-gray-700 mt-2">{msg.tribute}</p>
          </div>
        ))}
      </div>

    </div>
  
  );
}