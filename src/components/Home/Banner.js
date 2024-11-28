import { Col, Container, Row } from "react-bootstrap";
import banner1 from '../../img/banner/banner-1.jpg';
import banner2 from '../../img/banner/banner-2.jpg';
import banner3 from '../../img/banner/banner-3.jpg';
import './banner.css'

function Banner() {


    return (
        <>
        <Container style={{ paddingTop: '100px' , paddingBottom: '100px'}}>
            <Row>
                <Col lg={7} style={{marginLeft: '34%'}}>
                <div className="banner-item">
                <div className="banner-item-pic">
                    <img src={banner1} alt="Clothing" />
                </div>
                <div className="banner-item-text">
                    <h2>Clothing Collections 2030</h2>
                    <a href="">Shop now</a>
                </div>
                </div>

                </Col>
                <Col lg={5}>
                
                </Col>
                <Col lg={7}>
                
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Banner;