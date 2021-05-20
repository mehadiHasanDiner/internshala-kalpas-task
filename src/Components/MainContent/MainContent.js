import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../MainContent/MainContent.css'
import NewsCard from '../NewsCard/NewsCard';
import loading from '../../images/loading.gif'
import NewsList from '../NewsCard/NewsList';

const MainContent = () => {
    const [allNews, setAllNews] = useState([]);
    const [views, setViews] = useState('list');

    useEffect(() => {
        fetch('https://api.first.org/data/v1/news ')
            .then(res => res.json())
            .then(data => {
                setAllNews(data.data);
                console.log(data.data)
            })
    }, [])

    const changeViews = (value) => {
        setViews(value);
    }

    return (
        <div className="main-page">
            {
                allNews.length === 0 && <div style style={{display:"grid", alignItems:"center", justifyContent: "center"}}><img style = {{width: "200px"}} src= {loading} alt="" /></div>
            }
            
            <div className ={views == 'list' ? 'card-design container' : 'list-style container'}>
            {
                views === 'list' ?
                allNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                :
                allNews.map(news => <NewsList news={news} key={news.id}></NewsList>)
                // :
                // allNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                
            }
            </div>
        
        </div>
    );
};

export default MainContent;