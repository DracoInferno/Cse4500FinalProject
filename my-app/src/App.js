// import logo from './logo.svg';
import './App.css';
import myClass from "./images/Class.png";
import Ring from "./images/EldenRing.png";
import myFrieren from "./images/Frieren.png";
import myFrom from "./images/FromSoftware.png";
import myViolet from "./images/Violet.png";
import myEver from "./images/VioletEvergarden.png";

function App() {
  return (
    <div className="App">
       <div class="header">
          <h1>About Me</h1>
          <h2>By Steven Peralta</h2>
        </div>

        <div>
        <p> 
            Hello my name is Steven Peralta and this is about me page. I started going this CSUSB in the year 2022 of Spring. I hope to graduate this year in Fall of 2024. I am taking this class because it is required for my bachler degree in Consentration Game Deign. After I graduate I would like to work in a Indie Game Company or A big one like FromSoftware. The reason I choose so join a small Indie Company is I want to start small and get more exprinece along the way of my carier.
        </p>

        <img src= {myFrom} alt="Company" class="Company"/>

        <img src= {Ring} alt="Game" class="Game"/>

        <br></br>
        <p> 
            As I said before I loved video game that my main carrer is Game Design. This is not the only thing I love. I also like to watch movie as well. I like action, romance drama, comedy movies the best. But my most least favortie movies would be horror becuse I get to scared easy. So I intend to skip horor movies if I can. Currently my favorite movie as of right now Is voilet evergarden: The movie. Not only do like the movie I also like the series as a whole including the anime series as well.
        </p>

        <img src= {myEver}  alt="Movie" class="Movie"/>

        <br></br>
        <p>
            Another thing about me is I love to watch anime and when I have free time I watch it to past the time. For my genere of anime to watch is the same with movies being action, romance drama, and comedy. There are three anime that are my favroite and those bringvClassroom of the Elite, Violet EverGarden, and frieren beyond journey's end. These are my most favrite one of ones I have watch. SO these are three thing that I love now let me tell me something I don't like. 
        </p>

        <img src= {myClass} alt="Anime1" class="Anime1"/>

        <img src= {myViolet} alt="Anime2" class="Anime2"/>

        <img src= {myFrieren} alt="Anime3" class="Anime3"/>
        
        <br></br>

        <p>
            One things I dont like is sports like my brother does. I am not a big fan of sports like scoccer, or football for example. But my family does and I see why people like playing the sport and/or watching the games. But tt does not apeal to me like to other people. If my family and friends invite me to watch the games then I will watch with them but I preffer to watch something else. Same thing with video game I dont like sports games for the same reason. So this is the end of the About Me thank you for reading and have a great day.
        </p>
        <br></br>
        
        <a href="https://github.com/DracoInferno/Platform-Computing">Get Repo</a>
        
        <button>Tracker</button>

        </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
