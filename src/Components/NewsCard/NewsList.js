import React from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NewsCard/NewsList.css';

import cardImage from '../../images/cardImage.png';


const NewsList = (props) => {
    const { link, published, summary, title } = props.news;

    return (
        <div>
            <div className="list-style">
                <div>
                    <div className="row">
                        <div className="col-1">
                            <img className="img-style" src={cardImage} alt="no image found" />
                        </div>
                        <div className="col-10">

                            <a href={link}>
                                <p><strong>{title}</strong></p>
                                <p className="new-summary">{summary} </p>
                                <p style={{ color: "#808080" }}>{published}</p>
                            </a>
                        </div>

                        <div className="col-1">
                            <button className="button-style">X</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsList;