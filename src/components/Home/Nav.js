import { Container, Row, Col } from "react-bootstrap";
import { LuShoppingCart, LuSearch, LuHeart } from "react-icons/lu";
import Logo from "../../img/logo.png";

function Nav(){

    return(
       <Container style={{ height: "100%" }}>
                <Row>
                    <Col lg={3} md={3}>
                        <div style={{ padding: "30px 0" }}>
                            <a href="./index.html"><img src={Logo} alt="logo" style={{ width: "200px", height: "25px" }} /></a>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="">
                        <nav className="text-align-center pt-4 pb-4" style={{ width: "100%" }}>
                            <ul className="d-flex gap-5 mt-2 fw-bold" style={{ fontSize: "1.1rem" }}>
                                <li><a>Home</a></li>
                                <li><a>Shop</a></li>
                                <li><a>Pages</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contacts</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="d-flex justify-content-end" style={{ width: "100%" }}>
                            <div className="text-align-center pt-4 pb-4 d-flex gap-4 mt-2">
                                <LuSearch className="w-50 h-50" />
                                <LuHeart className="w-50 h-50" />
                                <LuShoppingCart className="w-50 h-50" />
                                <p className="fw-bold">$0.00</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}
export default Nav;