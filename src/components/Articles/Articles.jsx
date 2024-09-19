import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setArticles(prev => [...prev, ...data.hits]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };
  const handleSetQuery = searchValue => {
    setQuery(searchValue);
    setArticles([]);
    setPage(0);
  };
  return (
    <div>
      <h2>HTTP</h2>
      <SearchBar setQuery={handleSetQuery} />
      {articles.length > 0 && <ArticlesList articles={articles} />}
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again!</h2>}
      <button onClick={handleChangePage}>Load more</button>
      <div>
        {Array(250)
          .fill('')
          .map((_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};
export default Articles;

// axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => console.log(res.data));
