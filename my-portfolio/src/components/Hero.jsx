import profileImage from '../images/me.jpg';

const Hero = () => {
    return (
      <div className="hero-wrapper">
        <h3>About Me</h3>
        <div className="hero-about-me">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            amet quos totam maxime tenetur non consectetur quod, optio officiis?
            At quas unde tempore quos reiciendis quis, explicabo vel ea
            architecto!
          </p>
          <img src={profileImage}></img>
        </div>
      </div>
    );
};

export default Hero;