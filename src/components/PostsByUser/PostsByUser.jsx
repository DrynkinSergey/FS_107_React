import { Suspense } from 'react';
import { fetchPostsByUserId } from '../../services/api';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/useHttp';

const PostsByUser = () => {
  const { userId } = useParams();

  const [posts] = useHttp(fetchPostsByUserId, userId);

  if (!posts?.length) {
    return <h2>This user has not any posts yet!</h2>;
  }
  return (
    <div className='wrapperPosts'>
      <ul>
        {posts?.map(post => (
          <li key={post.id}>
            <Link to={`${post.id}/details`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <div className='outlet'>
        <Suspense fallback={<h2>Third suspense</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default PostsByUser;
