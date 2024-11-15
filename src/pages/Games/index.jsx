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
        price="Free"
        platform="Windows/PC"
        description="In a small, isolated town in the woods, a movie theater worker begins their first night shift. What starts as a quiet, eerie evening soon takes a sinister turn as strange and unsettling events begin to unfold."
        coverImg={movieTheaterCover}
        downloadLink="https://movie-theater-game-drg-software.s3.us-east-1.amazonaws.com/MovieTheaterGame.zip"
      />
      <p>More games coming soon!</p>
    </div>
  );
};

export default Games;
