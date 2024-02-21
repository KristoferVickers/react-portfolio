const About = () => {
  return (
    <div>
      <h2 style={{ color: 'white' }}>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="public\assets\unnamed (4).png" alt="Kristofer Vickers" style={{ borderRadius: '50%', border: '5px solid white', boxShadow: '0px 0px 10px 5px rgba(255,255,255,0.7)' }} />
        </div>
        <div className="about-text" style={{ color: 'white' }}>
          <p>
            Hi there! Im Kristofer Vickers, and Im currently attending the University of Kansas for their programming bootcamp.
          </p>
          <p>I live in Springfield, MO, with my girlfriend named Grace and our three animals.</p>
          <p>Feel free to contact me if youd like!</p>
        </div>
      </div>
    </div>
  );
}

export default About;