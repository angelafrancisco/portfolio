const HomeHeader = () => {
  return (
    <div className="header-container">
      <h1 className="name-header">angela francisco</h1>
      <p className="name-subheader">SOFTWARE ENGINEER</p>
      <img
        src="/about-me-photo.png"
        alt="About Me Photo"
        width={250}
        height={250}
        id="about-me-photo"
      />
      <img
        src="/curved-arrow-with-broken-line.png"
        alt="Curved dotted line arrow pointing down"
        id="arrow-line"
      />
    </div>
  );
};

export default HomeHeader;
