// src/Card.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faComputer,
  faDownload,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import zipFile from "../../images/zip-file.png";
import zipExtract from "../../images/zip-extract.png";
import zipModal from "../../images/zip-modal.png";
import gameFile from "../../images/game-file.png";
import "./index.scss";
import { useConfirm } from "material-ui-confirm";

const Card = ({
  title,
  content,
  price,
  platform,
  description,
  coverImg,
  downloadLink,
  downloadText = "Download Here",
}) => {
  const iconMap = {
    "Windows/PC": faComputer,
    "Browser": faGlobe,
  };

  const confirm = useConfirm();

  const handleGalleryClick = () => {
    confirm({
      title,
      content,
      confirmationButtonProps: { style: { display: "none" } },
    }).catch(() => {});
  };

  // Instructions for extracting zip file.
  const openDownloadModal = () => {
    confirm({
      title: `Thank you for downloading ${title} game!`,
      titleProps: { fontWeight: 700 },
      content: (
        <>
          <p>
            After downloading the game on{" "}
            <a href={downloadLink} target="_blank" rel="noopener noreferrer">
              Itch.io
            </a>{" "}
            (where it's hosted), you will see the zip file in your downloads.
          </p>
          <img src={zipFile} alt="zip file for movie theater game" />
          <p>
            Once the download is complete, left click on the folder and choose:
            <br />
            <strong>Extract All...</strong>
          </p>
          <img src={zipExtract} alt="zip extract instructions" />
          <p>
            Click <strong>Extract</strong>. The zip file will be extracted in
            the same location where it was downloaded.
          </p>
          <img src={zipModal} alt="zip modal" />
          <p>
            After the zip is done extracting, click{" "}
            <strong>The Movie Theater</strong> application (.exe) in the folder.
          </p>
          <img src={gameFile} alt="movie theater game .exe" />
        </>
      ),
      cancellationButtonProps: { style: { display: "none" } },
      contentProps: { style: { maxHeight: "500px" } },
    });
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
          <a
            className="download-link button"
            href={downloadLink}
            onClick={openDownloadModal}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} /> {downloadText}
          </a>
        </div>
      </div>
      <div className="card-image-wrapper">
        <img src={coverImg} alt={title} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
