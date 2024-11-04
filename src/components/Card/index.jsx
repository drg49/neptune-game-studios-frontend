// src/Card.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faDownload, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Card = ({
  title,
  price,
  downloads,
  dateCreated,
  description,
  imageUrl,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-info">
          <span className="card-icon">
            <FontAwesomeIcon icon={faTag} /> {price}
          </span>
          <span className="card-icon">
            <FontAwesomeIcon icon={faDownload} /> {downloads}
          </span>
        </div>
        <p className="card-description">{description}</p>
      </div>
      <img src={imageUrl} alt={title} className="card-image" />
    </div>
  );
};

export default Card;
