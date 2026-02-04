

import { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch users");

  const data = await response.json();

  const users: User[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    chance: Math.floor(Math.random() * 101),
  }));

  return users;
};
