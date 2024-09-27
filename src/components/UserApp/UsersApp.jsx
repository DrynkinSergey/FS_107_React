import { useEffect, useMemo, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link, useSearchParams } from 'react-router-dom';
import FilterBar from '../FilterBar/FilterBar';

const UsersApp = () => {
  const [users, setUsers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getAllUsers();
  }, []);
  const handleChangeQuery = newQuery => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  const filteredData = useMemo(
    () =>
      users.filter(user => user.lastName.toLowerCase().includes(query.toLowerCase()) || user.firstName.toLowerCase().includes(query.toLowerCase())),
    [query, users]
  );

  return (
    <div>
      <h2>Users</h2>
      <FilterBar handleChangeQuery={handleChangeQuery} />
      <ul>
        {filteredData.map(user => (
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
