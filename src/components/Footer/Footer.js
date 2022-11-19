import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from "../../images/location.png";

function footerPage(){
    return(
        <footer>
            <Row>
                <Col lg="6">
                    <div className="">
                        <div>
                            <img src={location}></img>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="">

                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default footerPage;
