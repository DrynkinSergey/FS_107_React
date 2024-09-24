import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchUsers = async () => {
  const { data } = await axios.get('users');
  return data.users;
};
