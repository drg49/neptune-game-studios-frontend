// src/Card.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faComputer } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Card = ({
  title,
  price,
  platform,
  description,
  coverImg,
}) => {

  const iconMap = {
    'PC/Mac': faComputer
  }

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-info">
          <span className="card-icon">
            <FontAwesomeIcon icon={faTag} />
            <span>{price}</span>
          </span>
          <span className="card-icon">
            <FontAwesomeIcon icon={iconMap[platform]} />
            <span>{platform}</span>
          </span>
        </div>
        <p className="card-description">{description}</p>
      </div>
      <img src={coverImg} alt={title} className="card-image" />
    </div>
  );
};

export default Card;
