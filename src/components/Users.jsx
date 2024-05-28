import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [loadedUsers, setLoadedUsers] = useState(users);
  console.log(loadedUsers);

  const handleDelete = (id) => {
    fetch(`https://coffee-store-server-alpha-jade.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Done");
          const remaining = loadedUsers.filter((user) => user._id !== id);
          setLoadedUsers(remaining);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Creation Time</th>
            <th>Last Login Time</th>
          </tr>
        </thead>
        {loadedUsers.map((user, index) => (
          <tbody key={user._id}>
            <tr>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>{user.creationTime}</td>
              <td>{user.lastSignInTime}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                  className="btn bg-red-500 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Users;
