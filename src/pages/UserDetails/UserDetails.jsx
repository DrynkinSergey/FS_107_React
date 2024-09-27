import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

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
      <button onClick={() => navigate('/users')}>Go back</button>
      <Link to='/users'>Go back link</Link>
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
