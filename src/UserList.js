import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id} style={{ margin: '10px 0', listStyleType: 'none' }}>
            <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <h2 style={{ margin: '0 0 10px' }}>{user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;