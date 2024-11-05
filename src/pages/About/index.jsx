import React from "react";
import paImg from "../../images/pa.jpg";
import "./index.scss";

const About = () => {
  return (
    <div id="about">
      <p>Created by Daniel Gavin</p>
      <br />
      <p>
        On a cold November day in Central Pennsylvania, I launched Neptune Game
        Studios with the goal of creating games that engage and connect with
        players around the world. After starting my first project in 2022,
        I'm pleased to announce that <i>The Movie Theater</i> game is now available for
        free. I look forward to growing our community of players with each new
        game I release. Thanks for stopping by!
      </p>
      <br />
      <img src={paImg} />
      <br />
      <span>Appalachian National Scenic Trail in Duncannon, PA</span>
      <br />
    </div>
  );
};

export default About;
