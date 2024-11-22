import React from 'react';
import { Carousel } from 'react-bootstrap';
import Hero1 from "../../img/hero-1.jpg"
import Hero2 from "../../img/hero-2.jpg"


function HeroSection() {
  return (
    <Carousel>
      {/* اسلاید اول */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero1}
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Fall - Winter Collections 2030</h3>
          <p>A specialist label creating luxury essentials.</p>
          <button className="btn btn-dark">Shop Now →</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* اسلاید دوم */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero2}
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Summer Collection</h3>
          <p>Discover the latest trends in summer fashion.</p>
          <button className="btn btn-dark">Shop Now →</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
