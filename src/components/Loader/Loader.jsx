import { Comment } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Comment
        visible={true}
        height='280'
        width='280'
        ariaLabel='comment-loading'
        wrapperStyle={{}}
        wrapperClass='comment-wrapper'
        color='#fff'
        backgroundColor='#00d443'
      />
    </div>
  );
};
export default Loader;
