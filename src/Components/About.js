function About() {
  return (
    <div className="about">
      <img src="/images/optimized-desk.JPG" className="pic" alt="Anna at desk" />
      <div className="bio">
        <h1 className="bio-heading">
          <span className="let">let</span>
          <span className="developer"> developer </span>
          = {"{ "}
          <br></br>
          <span className="name-property">firstName:</span>
          <span className="name-value"> 'Anna'</span>,
          <br></br>
          <span className="name-property"> lastName:</span>
          <span className="name-value"> 'Harbour'</span>
          <br></br>
          {"}"}
        </h1>
        
        <p>
          Hi, I'm Anna, a full-stack software developer and lover of learning. My tendency to
          avidly consume books, articles, podcasts, and tutorials is fueled by an 
          insatiable curiosity. Despite my intellectual proclivities, I'm also
          an extrovert and health enthusiast who enjoys sand volleyball, yoga,
          running, and any activity within sight of water, trails, or mountains.
        </p>
        <div className="bio-links">
          {/* <button>
            <i className="fa-solid fa-file"></i>   
            Resume
          </button>
          <button>
            <i className="fa-solid fa-file-arrow-down"></i>
               Download Resume
          </button> */}
          <button>
            <i className="fa-brands fa-github"></i>
               Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
