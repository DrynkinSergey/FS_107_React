import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchUsers = async () => {
  const { data } = await axios.get('users?limit=200');
  return data.users;
};

export const fetchUserById = async userId => {
  const { data } = await axios.get(`users/${userId}`);
  return data;
};

export const fetchPostsByUserId = async userId => {
  const { data } = await axios.get(`posts/user/${userId}`);
  return data.posts;
};

export const fetchPostById = async postId => {
  const { data } = await axios.get(`posts/${postId}`);
  return data;
};
