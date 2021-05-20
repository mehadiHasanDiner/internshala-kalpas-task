import { createContext, useEffect, useState } from 'react';
import './App.scss';
import Feedback from './Components/Feedback/Feedback';
import MainContent from './Components/MainContent/MainContent';
import NewsCardModal from './Components/NewsCardModal/NewsCardModal';
import Sidebar from './Components/Sidebar/Sidebar';
export const ChangeNewsView = createContext();

function App() {

  const [allNews, setAllNews] = useState([]);
  const [changeViews, setChangeViews] = useState('list');
  const [newsModal, setNewsModal] = useState({});
  const [loading, setLoading] = useState(true);
  const [toggleNewsModal, setToggleNewsModal] = useState(false);
  const [toggleNewsFeedback, setToggleNewsFeedback] = useState(false)


  useEffect(() => {
    fetch('https://api.first.org/data/v1/news ')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setAllNews(data.data);
        setLoading(false);
      })
  }, [changeViews])

  const handelShowNews = (id) => {
    const findNewsItem = allNews.find((data) => data.id === id);
    console.log(findNewsItem);
    setToggleNewsModal(true);
    setNewsModal(findNewsItem);
  };

  const handleDeleteNews = (id) => {
    const findDeleteNews = allNews.filter((data) => data.id !== id);
    setAllNews(findDeleteNews);
  };

  const closeModal = () => {
    setToggleNewsModal(false);
  };

  const handleOpenFeedback = () => {
    setToggleNewsFeedback(true)
  };

  const handleCloseFeedback = () => {
    setToggleNewsFeedback(false)
  };

  return (
    <ChangeNewsView.Provider value={[changeViews, setChangeViews]}>
      <main>
        
      <NewsCardModal
          trigger={toggleNewsModal}
          closeModal={closeModal}
          newsModal={newsModal}></NewsCardModal>

        <Feedback
          trigger={toggleNewsFeedback}
          handleCloseFeedback={handleCloseFeedback}></Feedback>

        <div className="sidebar">
          <Sidebar handleOpenFeedback={handleOpenFeedback}>
          </Sidebar>
        </div>

        <div className="content">
          <MainContent
            handelShowNews={handelShowNews}
            allNews={allNews}
            handleDeleteNews={handleDeleteNews}
            loading={loading}
          >
          </MainContent>
        </div>

      </main>
    </ChangeNewsView.Provider>
  );
}

export default App;
