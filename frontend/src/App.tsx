import React from "react";
import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { User } from "./types/index";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleUserCreated = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full bg-gray-200 py-6 px-8 border-b border-gray-300 rounded-b-xl shadow">
        <h1 className="text-2xl font-bold text-center text-black">
          Gestión de Usuarios
        </h1>
      </header>
      <main className="bg-gray-800 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <UserForm onUserCreated={handleUserCreated} />
          <UserList users={users} onDelete={handleDelete} />
        </div>
      </main>
    </div>
  );
}