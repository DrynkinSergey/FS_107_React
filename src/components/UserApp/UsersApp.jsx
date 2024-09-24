import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';

const UsersApp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getAllUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id.toString()}>
              <p>
                {user.lastName} {user.firstName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersApp;
