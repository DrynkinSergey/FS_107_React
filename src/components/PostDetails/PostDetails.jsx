import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../services/api';
import { useHttp } from '../../hooks/useHttp';

const PostDetails = () => {
  const { postId } = useParams();
  const [post] = useHttp(fetchPostById, postId);

  if (!post) return <h2>loading...</h2>;
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <p>LIKES:{post.reactions.likes}</p>
      <p>DISLIKES:{post.reactions.dislikes}</p>
    </div>
  );
};
export default PostDetails;
