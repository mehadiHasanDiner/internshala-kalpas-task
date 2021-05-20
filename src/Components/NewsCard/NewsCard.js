import React, { useContext } from 'react';
import { ChangeNewsView } from '../../App';
import noImage from '../../images/noImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import loadingPic from '../../images/loading.gif';


const NewsCard = ({ key, loading, item, handelShowNews, handleDeleteNews }) => {
    const [changeViews, setChangeViews] = useContext(ChangeNewsView);
    const { id, title, summary, link, image, published } = item;
    return (
        <div className="item">
            
            { loading ? (<img  src={loadingPic} alt="" />) : (<div className="cardBody" onClick={() => handelShowNews(id)}>
                <div className="img">
                    <img src={image ? image : noImage} alt="img" />
                </div>
                <div className="itemContent">
                    <h3>{title}</h3>
                    {changeViews === 'grid' ? (
                        <p>{summary?.substr(0, 50)}</p>
                    ) : (
                        <p>{summary?.substr(0, 120)}</p>
                    )}
                    <span>{published}</span>
                </div>
            </div>)}
            <div className="delete" onClick={() => handleDeleteNews(id)}> <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    );
};

export default NewsCard;