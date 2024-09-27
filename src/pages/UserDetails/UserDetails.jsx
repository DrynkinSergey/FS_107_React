import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  const location = useLocation();
  console.log(location);
  const goBackRef = useRef(location.state ?? '/users');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

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
      <Outlet />
    </div>
  );
};
export default UserDetails;
