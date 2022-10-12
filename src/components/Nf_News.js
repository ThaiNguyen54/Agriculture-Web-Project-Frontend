import Container from 'react-bootstrap/esm/Container';
import newsContentImage1 from '../images/news-1.jpg'
import newsContentImage2 from '../images/news-2.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function NewsNfeed(){
    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Nông nghiệp Việt Nam</h3>
                </div>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src={newsContentImage1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src={newsContentImage2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <div className='content-news-second'>
                    <h3>Chăm sóc cây</h3>
                </div>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src={newsContentImage1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src={newsContentImage2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default NewsNfeed;