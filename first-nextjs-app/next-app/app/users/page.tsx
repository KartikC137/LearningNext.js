import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1
        className="backdrop-blur-3xl
      bg-purple-500/25
      border-solid border-4 border-amber-400 text-2xl text-amber-400
      p-3 mb-5 rounded-2xl shadow-md shadow-purple-800/50"
      >
        Users
      </h1>
      <table
        className="table
       backdrop-blur-3xl
      bg-purple-500/25
      border-4 border-separate border-amber-400 text-amber-200"
      >
        <thead>
          <tr>
            <td className="text-2xl text-amber-500">User Name</td>
            <td className="text-2xl text-amber-500">User Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UsersPage;
