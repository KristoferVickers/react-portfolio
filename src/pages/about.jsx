const About = () => {
    return (
        <div style={{ fontFamily: 'Playfair Display, serif', color: 'black' }}>
        <h2>About Me</h2>
        <div className="about-content" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="about-text">
            <p>
            Hey there! Im Kristofer Vickers, a 24-year-old guy on a mission in Springfield, Missouri. By day, Im diving deep into code as a programmer, and by night, Im battling bosses in the virtual realm alongside my girlfriend Grace and our furry squad—Moose, Kobe, and Pepper. Now, lets chat about my tech obsession. I live for coding. Seriously, theres something magical about transforming lines of text into functional, game-changing software. But heres the twist—Ive got big dreams beyond just writing code. Im setting my sights on becoming a Database Analyst, diving into the world of data to uncover insights and drive decision-making. Of course, when Im not knee-deep in code or plotting my data domination, youll find me unleashing my inner gamer. From epic RPG quests to heart-pounding multiplayer battles, gaming is my escape from the daily grind. But hey, Im not all about pixels and code. I love getting out and enjoying the simple things in life—whether its hiking with Moose, exploring new trails, or just chilling in the park with Grace. As I journey towards my goal of becoming a Database Analyst, Im constantly seeking new challenges and opportunities to grow. Whether its mastering the intricacies of SQL or diving into data visualization techniques, Im always hungry to expand my skills and make a meaningful impact in the world of data. So, whats next on my adventure list? Who knows! But one things for sure Im ready to embrace the unknown, tackle new challenges head-on, and carve out my path in the ever-evolving world of technology.
            </p>
          </div>
          <div className="about-image" style={{ marginLeft: '20px' }}>
            <img src="public/assets/unnamed (4).png" alt="Kristofer Vickers" style={{ borderRadius: '50%', border: '5px solid white', boxShadow: '0px 0px 10px 5px rgba(255,255,255,0.7)' }} />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;