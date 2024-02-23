const Portfolio = () => {
  return (
    <div>
      <h2 style={{ color: 'white' }}>Portfolio</h2>
      <div className="projects-container">
        <div className="project">
          <h3 style={{ color: 'white' }}>Cats and Cocktails</h3>
          <a href="https://github.com/whimsically/cats-and-cocktails" style={{ color: 'white' }}>
            <img src="public/assets/Cats_and_Cocktails.png" alt="Cats and Cocktails" style={{ width: '250px', height: '200px' }} />
          </a>
        </div>
        <div className="project">
          <h3 style={{ color: 'white' }}>Day Scheduler</h3>
          <a href="https://github.com/KristoferVickers/work-day-scheduler" style={{ color: 'white' }}>
            <img src="public/assets/Day_Scheduler.png" alt="Day Scheduler" style={{ width: '250px', height: '200px' }} />
          </a>
        </div>
        <div className="project">
          <h3 style={{ color: 'white' }}>Foodie Forum</h3>
          <a href="https://github.com/andria-goodwin/foodie-forum" style={{ color: 'white' }}>
            <img src="public/assets/Foodie_Forum.png" alt="Foodie Forum" style={{ width: '250px', height: '200px' }} />
          </a>
        </div>
        <div className="project">
          <h3 style={{ color: 'white' }}>Password Generator</h3>
          <a href="https://github.com/KristoferVickers/password-generator" style={{ color: 'white' }}>
            <img src="public/assets/Password_Generater_Project.png" alt="Password Generator" style={{ width: '250px', height: '200px' }} />
          </a>
        </div>
        <div className="project">
          <h3 style={{ color: 'white' }}>Weather Watchers</h3>
          <a href="https://github.com/KristoferVickers/weather-dashboard" style={{ color: 'white' }}>
            <img src="public/assets/Weather_Watchers.png" alt="Weather Watchers" style={{ width: '250px', height: '200px' }} />
          </a>
        </div>
      </div>
      <footer>This is the footer content</footer>
    </div>
  );
}

export default Portfolio;