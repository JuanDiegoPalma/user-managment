import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

export default function UserList({ users, onDelete }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center border-b py-2"
        >
          <span>
            <strong>{user.name}</strong> - {user.email}
          </span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => onDelete(user.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}