import axios from 'axios';

export const fetchArticles = async () => {
  const { data } = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
  return data;
};
