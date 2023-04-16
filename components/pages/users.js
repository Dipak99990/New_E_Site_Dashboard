import React from "react";

function UsersPage({ users }) {
  console.log(users);
  return (
    <div>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th className="p-2 border-r text-left">User_Id</th>
            <th className="p-2 border-r text-left">Name</th>
            <th className="p-2 border-r text-left">Email</th>
            <th className="p-2 border-r text-left">Role</th>
            <th className="p-2 border-r text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="p-2 border-r text-left">{user._id.slice(-5)}</td>

              <td className="p-2 border-r text-left">{user.name}</td>
              <td className="p-2 border-r text-left">{user.email}</td>
              <td className="p-2 border-r text-left">{user.role}</td>
              <td className="p-2 border-r text-left">{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
