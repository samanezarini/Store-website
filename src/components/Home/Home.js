import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import "./home.css";
import HeroSection from "./slide";
import Nav from "./Nav";

function Home() {


    return (
        <>
            <header>
                <div className="lh-lg" style={{ backgroundColor: "black", height: "45px", fontSize: "0.95rem" }}>
                    <Container>
                        <Row>
                            <Col lg={6} md={7} >
                                <div className="h-25">
                                    <p className="mt-2 text-light">Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </Col>
                            <Col lg={6} md={5} className="d-flex justify-content-end h-25">
                                <div className="d-flex gap-5 mt-2 text-light" style={{ fontSize: "0.85rem" }}>
                                    <div className="d-flex gap-5">
                                        <span><a>SIGN IN</a></span>
                                        <span><a>FAQS</a></span>
                                    </div>
                                    <div className="usd-hover">
                                        <span className="text-light d-flex">
                                            <a>USD</a>
                                            <IoIosArrowDown className="w-75 h-50 mt-1 ms-1" />
                                        </span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header >
            <Nav/>
            <section>
                <HeroSection />
            </section>

        </>
    );
}

export default Home;