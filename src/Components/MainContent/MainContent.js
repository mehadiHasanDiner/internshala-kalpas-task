import React, { useContext, useState } from 'react';
import { ChangeNewsView } from '../../App';
import NewsCard from '../NewsCard/NewsCard';
import './MainContent.scss';

const MainContent = ({ loading, allNews, handelShowNews, handleDeleteNews }) => {
    const [changeViews, setChangeViews] = useContext(ChangeNewsView);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsCardPerPage, setNewsCardPerPage] = useState(9);

    let className;
    switch (changeViews) {
        case 'list':
            className = 'list';
            break;
        case 'grid':
            className = 'grid';
            break;
        default:
            className = 'list';
            break;
    }

    const totalPages = [];
    for (let i = 1; i <= Math.ceil(allNews.length / newsCardPerPage); i++) {
        totalPages.push(i);
    }

    const handlePagination = (e) => {
        setCurrentPage(Number(e.target.id));
    };
    const totalPageNumber = totalPages.map((number) => {
        return (
            <li
                key={number}
                id={number}
                onClick={handlePagination}
                className={currentPage === number ? 'activePage' : null}>
                {number}
            </li>
        );
    });

    const indexOfLastPage = currentPage * newsCardPerPage;
    const indexOfFirstPage = indexOfLastPage - newsCardPerPage;
    const currentNewsPage = allNews.slice(indexOfFirstPage, indexOfLastPage)
    // console.log(currentNewsPage);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };



    return (
        <div className="p-5">
            <div className={className}>
                {
                    currentNewsPage.map((data, id) => (
                        <NewsCard
                            key={id}
                            item={data}
                            loading={loading}
                            handelShowNews={handelShowNews}
                            handleDeleteNews={handleDeleteNews}>
                        </NewsCard>
                    ))}
            </div>
            <div className="itemPagination text-center mt-3">
                <ul>
                    <li>
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === totalPages[0] ? true : false}> Previous</button>
                    </li>
                    {totalPageNumber}
                    <li>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages.length ? true : false}> Next</button>
                    </li>
                </ul>
            </div>
            
        </div >
    );
};

export default MainContent;