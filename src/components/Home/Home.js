import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosSearch, IoMdHeartEmpty, IoMdCart } from "react-icons/io";
import { LuShoppingCart, LuSearch, LuHeart } from "react-icons/lu";
import './home.css'
import Logo from '../../img/logo.png'
import HeroSection from "./Hero";
function Home() {


    return (
        <>
            <header>
                {/* header-top */}
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
                                        <span>SIGN IN</span>
                                        <span>FAQS</span>
                                    </div>
                                    <div className="usd-hover">
                                        <span className="text-light d-flex">
                                            USD
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

                {/* header-buttom */}
                <Container style={{ height: "90px" }}>
                    <Row>
                        <Col lg={3} md={3}>
                            <div style={{ padding: "30px 0" }}>
                                <a href="./index.html"><img src={Logo} alt="logo" style={{ width: "200px", height: "25px" }} /></a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="">
                            <nav className="text-align-center pt-4 pb-4" style={{ width: "100%" }}>
                                <ul className="d-flex gap-5 mt-2 fw-bold" style={{ fontSize: "1.1rem" }}>
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>Pages</li>
                                    <li>Blog</li>
                                    <li>Contacts</li>
                                </ul>
                            </nav>
                        </Col>
                        <Col lg={3} md={3}>
                            <div className="d-flex justify-content-end" style={{ width: "100%" }}>
                                <div className="text-align-center pt-4 pb-4 d-flex gap-4 mt-2">
                                    <LuSearch className="w-50 h-50" />
                                    <LuHeart className="w-50 h-50"/>
                                    <LuShoppingCart className="w-50 h-50"/> 
                                    <p className="fw-bold">$0.00</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header >
            
            <section>
                <HeroSection></HeroSection>
            </section>

        </>
    );
}

export default Home;