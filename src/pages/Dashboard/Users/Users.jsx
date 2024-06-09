import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-house-server.onrender.com/users/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div className='max-w-4xl mx-auto mt-10'>
      <table className='min-w-full bg-white border border-gray-300'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b border-gray-300 text-left'>
              Email
            </th>
            <th className='py-2 px-4 border-b border-gray-300 text-left'>
              Name
            </th>
            <th className='py-2 px-4 border-b border-gray-300 text-left'>
              Created Time
            </th>
            <th className='py-2 px-4 border-b border-gray-300 text-left'>
              Last Logging Time
            </th>
            <th className='py-2 px-4 border-b border-gray-300 text-left'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className='py-2 px-4 border-b border-gray-300'>
                {user?.email}
              </td>
              <td className='py-2 px-4 border-b border-gray-300'>
                {user?.name}
              </td>
              <td className='py-2 px-4 border-b border-gray-300'>
                {new Date(user?.createdAt).toLocaleString()}
              </td>
              <td className='py-2 px-4 border-b border-gray-300'>
                {new Date(user?.lastLoginAt).toLocaleString()}
              </td>
              <td className='py-2 px-4 border-b border-gray-300'>
                <button
                  // onClick={() => onEdit(user)}
                  className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:shadow-outline'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user?._id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
