import { Container, Row, Col, } from "react-bootstrap";
import { HiChevronDown } from "react-icons/hi";
import Card from 'react-bootstrap/Card';
import './home.css'

function Home() {


    return (
        <header>
            <div className="bg-dark lh-base" style={{height: "50px", fontSize: "0.85rem"}}>
                <Container>
                    <Row className="">
                        <Col lg={6} md={7} >
                            <div className="h-25">
                                <p className="mt-3 text-light">Free shipping, 30-day return or refund guarantee.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={5} className="d-flex justify-content-end h-25">
                            <div className="d-flex gap-5 mt-3 text-light" style={{}}>
                                <span>SIGN IN</span>
                                <span>FAQS</span>
                                <div className="usd-hover">
                                    <span className="text-light d-flex">
                                        USD
                                        <HiChevronDown className="w-50 h-50" />
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

            <headerbuttom>
            </headerbuttom>
        </header>
    );
}

export default Home;