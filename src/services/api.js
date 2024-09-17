import axios from 'axios';

export const fetchArticles = async (page = 0, query) => {
  const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=4`);
  return data;
};
