// Example usage in another component
import React from 'react';
import Card from '../../components/Card';
import movieTheaterCover from '../../images/movie-theater.jpg';
import './index.scss';

const Games = () => {
  return (
    <div id="games-list">
      <Card
        title="The Movie Theater"
        content={
          <>
            <p>
              <strong>Genre:</strong> First Person Horror Game
            </p>
            <p>
              <strong>Platforms:</strong> Windows/PC Only
            </p>
            <p>
              <strong>Release Date:</strong> November 15th, 2024
            </p>
            <p>
              <strong>Controls:</strong>
            </p>
            <ul>
              <li>
                <strong>ESC</strong> = Pause Game
              </li>
              <li>
                <strong>WASD</strong> or <strong>Arrows</strong> = Move
              </li>
              <li>
                <strong>Shift</strong> = Run
              </li>
              <li>
                <strong>R</strong> = Reload
              </li>
              <li>
                <strong>F</strong> = Toggle Weapon
              </li>
            </ul>
          </>
        }
        price="Free"
        platform="Windows/PC"
        description="In a small, isolated town in the woods, a movie theater worker begins their first night shift. What starts as a quiet, eerie evening soon takes a sinister turn as strange and unsettling events begin to unfold."
        coverImg={movieTheaterCover}
        downloadLink="https://neptunegamestudios.itch.io/the-movie-theater"
      />
      <p>More games coming soon!</p>
    </div>
  );
};

export default Games;
