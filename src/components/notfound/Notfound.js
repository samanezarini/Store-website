import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './notfound.css'
import pic404 from '../../img/11.png';
function NotFound() {


  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col lg={6} md={7} >
            <div className="h-25">
              <h5 className="mt-2 text-dark">404 Not Found. Please try again.</h5>
            </div>
          </Col>
          <Col lg={6} md={5} className="d-flex justify-content-end h-25">
            <div className="head d-flex gap-5 mt-2" style={{ fontSize: "0.86rem" }}>
              <ul className="d-flex gap-5 text-dark" style={{ listStyleType: "none" }}>
                <li><Link to="/" className="text-decoration-none text-dark">HOME</Link></li>
                <li><Link to="/" className="text-decoration-none text-dark">ABOUT US</Link></li>
                <li><Link to="/" className="text-decoration-none text-dark">HELP</Link></li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={8}>
            <div className="lh-lg" style={{ marginTop: '40%' }}>
              <h1 className="display-1 font-weight-bold"> Oh My...</h1>
              <p className="text-bold">it looks like this page has been lost</p>
              <button className="btn btn-secondary px-3 rounded-pill">
                <Link to="/" className="text-decoration-none text-light">Back to Home</Link>
              </button>
            </div>
            <div style={{marginTop: '40%'}}>
            <p>Hear is no answers on your request. sorry.</p>
          </div>
          </Col>
          <Col lg={8} md={12}>
            <div>
              <img
                className="w-100 h-100"
                src={pic404}
                alt="404" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default NotFound;