import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Hero1 from "../../img/hero-1.jpg"
import Hero2 from "../../img/hero-2.jpg"
import './slide.css'

function HeroSection() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ transform: "scale(1.4)" }}
              src={Hero1}
              alt="Slide 1"
            />
            <Carousel.Caption style={{ left: '7rem' }}>
              <Container>
                <Row style={{ position: 'relative', bottom: '5rem' }}>
                  <Col lg={7} md={8}>
                    <div className='hero-text'>
                      <h6>Summer Collection</h6>
                      <h2 style={{ marginRight: '3rem' }}>Fall - Winter Collections 2030</h2>
                      <p className="text-dark mb-5" style={{ marginRight: '7rem' }}>
                        A specialist label creating luxury essentials. Ethically crafted with
                        an unwavering commitment to exceptional quality.</p>
                      <button className="btn-shop">Shop Now →</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ transform: "scale(1.4)"}}
              src={Hero2}
              alt="Slide 2"
            />
            <Carousel.Caption style={{ left: '7rem' }}>
              <Container>
                <Row style={{ position: 'relative', bottom: '5rem' }}>
                  <Col lg={7} md={8}>
                    <div className='hero-text'>
                      <h6>Summer Collection</h6>
                      <h2 style={{ marginRight: '7rem' }}>Fall - Winter Collections 2030</h2>
                      <p className="text-dark mb-5" style={{ marginRight: '7rem' }}>
                        A specialist label creating luxury essentials. Ethically crafted with
                        an unwavering commitment to exceptional quality.</p>
                      <button className="btn-shop">Shop Now →</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>

  );
}

export default HeroSection;
