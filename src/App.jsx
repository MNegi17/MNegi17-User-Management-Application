import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList/>} />
        <Route path="/user/:id" element={<UserDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;

