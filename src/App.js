import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  
  const [allNews, setAllNews] = useState([]);
  const [changeViews, setChangeViews] = useState('list');

  useEffect(() => {
      fetch('https://api.first.org/data/v1/news ')
          .then(res => res.json())
          .then(data => {
              setAllNews(data.data);
              console.log(data.data)
          })
  }, [changeViews])
    
  return (
    <div>

    </div>
  );
}

export default App;
