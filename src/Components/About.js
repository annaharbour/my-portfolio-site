function About() {
  return (
    <div className="about">
      <img src="/images/desk.JPEG" className="pic" alt="Anna at desk" />
      <div className="bio">
        <h1>
          <span style={{ color: "#055099" }}>let</span>
          <span style={{ color: "#27C3DF" }}> programmer</span>={"{ "}
          <span style={{ color: "#6A9955" }}>firstName:</span>
          <span style={{ color: "#D9911A" }}>'Anna'</span>,
          <span style={{ color: "#6A9955" }}> lastName:</span>
          <span style={{ color: "#D9911A" }}>'Harbour'</span>
          {"}"}
        </h1>
        <p>
          Hi, I'm Anna, a full-stack software developer and lover of learning. My tendency to
          avidly consume books, articles, podcasts, and tutorials is fueled by an 
          insatiable curiosity. Despite my intellectual proclivities, I'm also
          an extrovert and health enthusiast who enjoys sand volleyball, yoga,
          running, and any activity within sight of water, trails, or mountains.
        </p>
      </div>
    </div>
  );
}

export default About;
