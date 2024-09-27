import { useEffect, useMemo, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import FilterBar from '../FilterBar/FilterBar';
import { useHttp } from '../../hooks/useHttp';

const UsersApp = () => {
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [users] = useHttp(fetchUsers);
  const handleChangeQuery = newQuery => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  const filteredData = useMemo(
    () =>
      users?.filter(user => user.lastName.toLowerCase().includes(query.toLowerCase()) || user.firstName.toLowerCase().includes(query.toLowerCase())),
    [query, users]
  );

  return (
    <div>
      <h2>Users</h2>
      <FilterBar handleChangeQuery={handleChangeQuery} />
      <ul>
        {filteredData?.map(user => (
          <li key={user.id}>
            <Link to={user.id.toString()} state={location}>
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
