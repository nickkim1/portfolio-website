import profileImage from '../images/me.jpg';

const Hero = () => {
    return (
      <div className="hero-wrapper" id="hero-wrapper">
        <h3>About Me</h3>
        <div className="hero-about-me">
          <p>
            Hi there! My name is Nick and I'm a rising junior at Brown University majoring in Applied Mathematics-Computer Science.
            I was a machine learning intern in the{" "}
            <a href="https://genomeinformatics.github.io/" target="_blank">
              Genome Informatics Section
            </a> at the NIH this past summer, where I built out several deep learning models
            (CNN, Transformer/Bert, LSTM, GRU) for the task of generating DNA-sequence embeddings for faster similarity search between arbitrary sequences. I also got to build a  
            vector database application for the embeddings and wrote a nearest-neighbor search utility using SQL and Python for faster querying!
            <br></br>
            <br></br>At Brown, I am a workshops lead for <a href="https://2024.hackatbrown.org/" target="_blank">Hack@Brown</a> - where I help
            facilitate the annual hackathon's workshop and speaker series for
            hundreds of hackers. 
            <br></br>
            <br></br>
            Outside of class you can find me reading a book (recent favorites: Minor Feelings, Kafka on the Shore), cafe-hopping, or playing basketball on some local court.
            Please feel free to reach out at <a href="mailto: nicolas_kim@brown.edu">nicolas_kim@brown.edu</a> for anything!
          </p>
          <img src={profileImage}></img>
        </div>
      </div>
    );
};

export default Hero;