import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NewsCard/NewsCard.css';
import cardImage from '../../images/cardImage.png';

const NewsCard = (props) => {
    const { link, published, summary, title } = props.news;

    return (
        <div>
            <Col className="card-design">
            <Card>
                <Card.Body>
                    <button className="button-design">X</button>
                    <p><strong>{title}</strong></p>                    
                    <p className="new-summary-style">{summary} </p>
                    <p style={{color:"#808080"}}>{published}</p>
                    <a href={link}><img className="img-fluid" src={cardImage} alt="no image found" /></a>
                </Card.Body>
                
            </Card>
            </Col>
        </div>
    );
};

export default NewsCard;