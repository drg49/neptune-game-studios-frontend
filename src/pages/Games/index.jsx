import Card from '../../components/Card';
import movieTheaterCover from '../../images/movie-theater.jpeg';
import flappyPenguinCover from '../../images/flappy-penguin.png';
import whisperingPinesCover from '../../images/whispering-pines.png';
import './index.scss';

const Games = () => {
  return (
    <div id="games-list">
      <Card
        title="Whispering Pines (Coming Soon)"
        content={
          <>
            <p>
              <strong>Genre:</strong> First Person Horror Game
            </p>
            <p>
              <strong>Platforms:</strong> Windows/PC Only
            </p>
            <p>
              <strong>Release Date:</strong> Coming Soon in 2026
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
            </ul>
          </>
        }
        price="Not Available"
        platform="Windows/PC"
        description="Three friends set out for a camping trip in the woods. Thick fog, eerie whispers, and a lurking shadow soon turn their adventure into a fight for survival."
        coverImg={whisperingPinesCover}
        downloadLink="https://neptunegamestudios.itch.io"
        comingSoon
      />
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
              <strong>Release Date:</strong> October 30th, 2025
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
        description="Working late at the movie theater, an employee experiences a quiet, eerie evening that quickly spirals into strange and unsettling events."
        coverImg={movieTheaterCover}
        downloadLink="https://neptunegamestudios.itch.io/the-movie-theater"
      />
      <Card
        title="Flappy Penguin"
        content={
          <>
            <p>
              <strong>Genre:</strong> 2D Arcade Game
            </p>
            <p>
              <strong>Platforms:</strong> Browser
            </p>
            <p>
              <strong>Release Date:</strong> November 7th, 2025
            </p>
            <p>
              <strong>Controls:</strong>
            </p>
            <ul>
              <li>
                <strong>Spacebar / MouseButton / Touch</strong> = Fly
              </li>
            </ul>
          </>
        }
        price="Free"
        platform="Browser"
        description="Flappy Penguin is an addictive and challenging 2D arcade game where players control a cute penguin navigating through a series of icy obstacles. The objective is to fly as far as possible without crashing into the obstacles, earning points for each successful pass."
        coverImg={flappyPenguinCover}
        downloadLink="https://flappy-penguin-two.vercel.app/"
        downloadText="Play Now"
      />
      <br />
    </div>
  );
};

export default Games;
