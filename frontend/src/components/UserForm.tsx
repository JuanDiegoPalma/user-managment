import React, { useState } from "react";
import { User } from "../types";

interface Props {
  onUserCreated: (user: User) => void;
}

export default function UserForm({ onUserCreated }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-ZñÑ\s]+$/;
    if (!nameRegex.test(name)) {
      alert("El nombre solo puede contener letras y espacios.");
      return;
    }
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const newUser = await res.json();
    onUserCreated(newUser);
    setName("");
    setEmail("");
  };

return (
  <div className="flex items-start justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-8 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-sm border-2 border-black mt-16"
    >
      <h2 className="text-xl font-bold text-center mb-2 text-black">Registrar usuario</h2>
      <input
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        pattern="^[a-zA-ZñÑ\s]+$"
        title="El nombre solo puede contener letras y espacios"
      />
      <input
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="bg-green-600 text-black p-3 rounded hover:bg-green-400 transition">
        Registrar usuario
      </button>
    </form>
  </div>
);
}