// Example usage in another component
import React from 'react';
import Card from '../../components/Card';
import './index.scss';

const Games = () => {
  return (
    <div id="games-list">
      <Card
        title="Indie Game Title"
        price="$9.99"
        downloads={1500}
        dateCreated="2023-01-01"
        description="This is a brief description of the indie game."
        imageUrl="https://via.placeholder.com/200" // Replace with your image URL
      />
      {/* Add more Card components as needed */}
    </div>
  );
};

export default Games;
