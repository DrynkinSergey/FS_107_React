import { useEffect, useState } from 'react';
import { fetchArticles } from './services/api';

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchArticles();
      setArticles(data.hits);
    };
    getData();
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
      <ul>
        {articles.map(item => (
          <li key={item.ObjectId}>
            <a href={item.url} target='_blank'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;

// axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => console.log(res.data));
