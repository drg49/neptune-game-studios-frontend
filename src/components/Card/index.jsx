// src/Card.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faComputer,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { useConfirm } from "material-ui-confirm";

const Card = ({
  title,
  price,
  platform,
  description,
  coverImg,
  downloadLink,
}) => {
  const iconMap = {
    "PC/Mac": faComputer,
  };

  const confirm = useConfirm();

  const handleGalleryClick = () => {
    confirm({
      title,
      content: <>Hello World</>,
      confirmationButtonProps: { style: { display: "none" } },
    }).catch(() => {});
  };

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
        <div className="card-action">
          <button className="button" onClick={handleGalleryClick}>
            View More
          </button>
          <a className="download-link button" href={downloadLink} download>
            <FontAwesomeIcon icon={faDownload} size="small" /> Download
          </a>
        </div>
      </div>
      <img src={coverImg} alt={title} className="card-image" />
    </div>
  );
};

export default Card;
