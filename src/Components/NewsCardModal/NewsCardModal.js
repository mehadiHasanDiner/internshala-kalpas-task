import React from 'react';
import noImage from '../../images/noImage.png';

const NewsCardModal = ({trigger, closeModal, newsModal}) => {
    const {title, summary, image } = newsModal;
    return (
        <div>
        {trigger ? (
            <div className = "modal-container">
                <div className = "modal-style">
                    <img src= {image ? image : noImage} alt="" />
                    <h3>{title}</h3>
                    <p>{summary && summary.substr(0, 380)}</p>
                    <button onClick = {closeModal}> Close</button>
                </div>            
        </div>
        ) : null}  
    </div>
    );
};

export default NewsCardModal;