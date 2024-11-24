import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart, LuSearch, LuHeart } from "react-icons/lu";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Nav(){

    return(
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
        </header>
       <Container style={{ height: "5.5rem" }}>
                <Row>
                    <Col lg={3} md={3}>
                        <div style={{ padding: "30px 0" }}>
                            <a href=""><img src={Logo} alt="logo" style={{ width: "190px", height: "23px" }} /></a>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="">
                        <nav className="text-align-center pt-4 pb-4 mx-5" style={{ width: "100%" }}>
                            <ul className="d-flex gap-5 mt-2 fw-bold" style={{ fontSize: "1.1rem" }}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/pages'>Pages</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contacts'>Contacts</Link></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="d-flex justify-content-end" style={{ width: "100%" }}>
                            <div className="text-align-center pt-4 pb-4 d-flex gap-4 mt-2">
                                <LuSearch className="w-75 h-75" />
                                <LuHeart className="w-75 h-75" />
                                <LuShoppingCart className="w-75 h-75" />
                                <p className="fw-bold mt-1">$0.00</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Nav;