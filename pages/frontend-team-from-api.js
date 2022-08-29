import React, { useEffect, useState } from 'react';

const FrontendTeamFromApi = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('/api/frontend_team');
    const data = await response.json();

    setUsers(data);
  };

  const removeUser = async (id) => {
    try {
      await fetch('/api/frontend_team', {
        method: 'DELETE',
        body: JSON.stringify({
          id,
        }),
      });
      fetchUsers();
    } catch (e) {
      console.error(e);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();

    const cleareFields = () => {
      e.target.name.value = '';
      e.target.age.value = '';
    };

    try {
      await fetch('/api/frontend_team', {
        method: 'POST',
        body: JSON.stringify({
          name: e.target.name.value,
          age: e.target.age.value,
        }),
      });

      cleareFields();
      fetchUsers();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Frontend team</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.age} age{' '}
          <button onClick={() => removeUser(user.id)}>X</button>
        </p>
      ))}
      <br />
      <form onSubmit={addUser}>
        <input name="name" placeholder="name" />
        <input name="age" type="number" placeholder="age" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default FrontendTeamFromApi;
