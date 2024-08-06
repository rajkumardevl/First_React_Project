const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          quos delectus, ratione fugiat at quis neque necessitatibus odio illo
          esse nihil, quaerat in ducimus enim molestias. Reprehenderit atque
          quos laborum!
        </p>
        <p>
          Consectetur, quos delectus, ratione fugiat at quis neque
          necessitatibus odio illo esse nihil, quaerat in ducimus enim
          molestias. Reprehenderit atque quos laborum!
        </p>
        <div className="two_button">
          <button>Shop Now</button>
          <button>Read More</button>
        </div>
      </div> 
      <div className="hero_image">
        <img src="../Images/shoes_image.png" alt="hero" />
      </div>
    </div>
  );
};
export default HeroSection;
