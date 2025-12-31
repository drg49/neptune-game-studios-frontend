import { useState } from 'react';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';

const videos = [
  {
    id: 'movie-theater-demo',
    title: 'The Movie Theater - Demo Gameplay',
    link: 'https://www.youtube.com/watch?v=FI9SQs8qDTE&t=1s',
  },
];

const getEmbedUrl = (id) => `https://www.youtube.com/embed/${id}?rel=0`;

const Media = () => {
  const [selected, setSelected] = useState(videos[0]);

  return (
    <div id="media-page">
      <h2>
        <i className="fa fa-youtube-play" aria-hidden="true"></i> Media
      </h2>

      <div className="video-list">
        {videos.map((v) => (
          <button
            key={v.id}
            className={`video-item ${v.id === selected.id ? 'active' : ''}`}
            onClick={() => setSelected(v)}
            aria-pressed={v.id === selected.id}
          >
            {v.title}
          </button>
        ))}
      </div>

      <div className="video-player">
        <h3>{selected.title}</h3>
        <div className="embed-wrap">
          <iframe
            src={getEmbedUrl(selected.id)}
            title={selected.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="note">
          Watch on YouTube:{' '}
          <a href={selected.link} target="_blank" rel="noopener noreferrer">
            Open in YouTube
          </a>
        </p>
      </div>
    </div>
  );
};

export default Media;
