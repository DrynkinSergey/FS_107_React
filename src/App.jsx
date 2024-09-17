import { useEffect, useState } from 'react';
import { fetchArticles } from './services/api';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Loader from './components/Loader/Loader';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles();
        setIsLoading(false);
        setArticles(data.hits);
      } catch (error) {
        console.log('error', error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
      {articles.length > 0 && <ArticlesList articles={articles} />}
      {isLoading && <Loader />}
    </div>
  );
};
export default App;

// axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => console.log(res.data));
