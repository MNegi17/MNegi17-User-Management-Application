import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ editingUser, setEditingUser, setUsers, users }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setPhone(editingUser.phone);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, phone };

    if (editingUser) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, user)
        .then(() => {
          setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...user } : u));
          setEditingUser(null);
        });
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(response => setUsers([...users, response.data]));
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='m-5 text-bold'>{editingUser ? 'Edit User' : 'Add User'}</h2>
      <input className='inline w-half p-4 m-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input className='inline w-half p-4 m-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input className='inline w-half p-4 m-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
      <button type="submit" className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-10'>{editingUser ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
