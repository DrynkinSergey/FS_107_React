import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';

const UserDetails = () => {
  const { userId } = useParams();
  const location = useLocation();
  console.log(location);
  const goBackRef = useRef(location.state ?? '/users');

  const [user] = useHttp(fetchUserById, userId);

  if (!user) return <h2>Loading...</h2>;
  return (
    <div>
      <Link to={goBackRef.current}>Go back link</Link>
      <img src={user.image} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <hr />
      <div>
        <NavLink to='info'>Info</NavLink>
        <NavLink to='posts'>Posts</NavLink>
      </div>
      <Suspense fallback={<h2>Second suspense</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default UserDetails;
