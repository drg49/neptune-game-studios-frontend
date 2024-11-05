// Example usage in another component
import React from 'react';
import Card from '../../components/Card';
import games from '../../game.json';
import './index.scss';

const Games = () => {
  const gameList = games.map((game, index) => {
    return (
      <Card
        key={index}
        title={game.title}
        price={game.price}
        platform={game.platform}
        description={game.description}
        imageUrl={game.cover_img}
      />
    )
  });

  return (
    <div id="games-list">
      {gameList}
    </div>
  );
};

export default Games;
