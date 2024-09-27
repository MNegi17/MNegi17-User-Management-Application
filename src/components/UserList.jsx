import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
  };

  return (
    <div className='text-center bg-black min-h-screen m-0 p-0'>
      <h1 className='text-5xl m-0 p-0 text-center font-black text-gray-900 dark:text-white font-bold'>User Management Application</h1>
      <UserForm editingUser={editingUser} setEditingUser={setEditingUser} setUsers={setUsers} users={users} />
      <table className='w-full box-border text-sm text-left rtl:text-right text-gray-900 dark:text-gray-900 my-0 mx-auto border-solid border-2 border-black font-black text-gray-900 dark:text-white'> 
        <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
          <tr>
            <th>#</th> {/* Number column */}
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td> {/* Display the number based on the index */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-5' onClick={() => setEditingUser(user)}>Edit</button>
                <button className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-5' onClick={() => handleDelete(user.id)}>Delete</button>
                <Link to={`/user/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
