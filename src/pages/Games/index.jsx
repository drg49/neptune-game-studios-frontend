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
        description="Three friends camp in the North Woods of Maine, but thick fog, eerie whispers, and a lurking shadow turn their trip into a fight for survival."
        coverImg={whisperingPinesCover}
        downloadLink="https://neptunegamestudios.itch.io"
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
