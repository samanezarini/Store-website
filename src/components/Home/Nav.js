import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart, LuSearch, LuHeart } from "react-icons/lu";
import Logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import './nav.css'

function Nav(){

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

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
                                <div className="head d-flex gap-5 mt-2 text-light" style={{ fontSize: "0.86rem" }}>
                                    <div className="d-flex gap-5">
                                        <span>SIGN IN</span>
                                        <span>FAQS</span>
                                    </div>
                                    <div className="usd-hover">
                                        <span className="text-light d-flex dropdown-toggle">
                                            <a href="">USD</a>
                                            <IoIosArrowDown className="w-75 h-50 mt-1 ms-1" />
                                        </span>
                                        <ul className="dropdown-menu">
                                            <a href=""><li>USD</li></a>
                                            <a href=""><li>EUR</li></a>
                                            <a href=""><li>USD</li></a>
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
                    <Col lg={6} md={6} className="navbarr">
                        <nav className="d-flex justify-content-center text-align-center pt-4 pb-4 " style={{ width: "100%" }}>
                            <ul className="d-flex gap-5 mt-2 fw-bold" style={{ fontSize: "1.1rem" }}>
                                <li><Link to='/' className={isActive("/") ? "active-link" : ""}>Home</Link></li>
                                <li><Link to='/shop' className={isActive("/shop") ? "active-link" : ""}>Shop</Link></li>
                                <li><Link to='/pages' className={isActive("/pages") ? "active-link" : ""}>Pages</Link></li>
                                <li><Link to='/blog' className={isActive("/blog") ? "active-link" : ""}>Blog</Link></li>
                                <li><Link to='/contacts' className={isActive("/contacts") ? "active-link" : ""}>Contacts</Link></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="d-flex justify-content-end text-align-center pt-4 pb-4 d-flex gap-4 mt-2" style={{ width: "100%" }}>
                                <LuSearch style={{width: '21px', height: '21px'}} className="mt-1" />
                                <LuHeart style={{width: '21px', height: '21px'}} className="mt-1" />
                                <LuShoppingCart style={{width: '21px', height: '21px'}} className="mt-1" />
                                <p className="fw-bold mt-1">$0.00</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Nav;