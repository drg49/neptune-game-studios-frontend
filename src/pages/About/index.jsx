import React from 'react';
import './index.scss';

const About = () => {
  return (
    <div id="about">
      <p>Created by Daniel Gavin</p>
      <br />
      <p>
        I launched Neptune Game Studios with the goal of creating games that
        engage and connect with players around the world. After starting my
        first project in 2022, I'm pleased to announce that{' '}
        <i>The Movie Theater</i> game is now available for free. I look forward
        to growing our community of players with each new game I release. Thanks
        for stopping by!
      </p>
      <br />
      <a
        href="https://neptunegamestudios.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="itch-io-link"
      >
        Neptune Game Studios Itch.io Page
      </a>
    </div>
  );
};

export default About;
