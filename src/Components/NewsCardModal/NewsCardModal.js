import React from 'react';
import noImage from '../../images/noImage.png';

const NewsCardModal = ({trigger, closeModal, newsModal}) => {
    const {tittle, summary, image } = newsModal;
    return (
        <div>
        {trigger ? (
            <div className = "cardModal">
                <div className = "modalInner">
                    <img src= {image ? image : noImage} alt="" />
                    <h3>{tittle}</h3>
                    <p>{summary && summary.substr(0, 350)}</p>
                    <button onClick = {closeModal}> Close</button>
                </div>            
        </div>
        ) : null}  
    </div>
    );
};

export default NewsCardModal;