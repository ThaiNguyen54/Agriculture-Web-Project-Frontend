import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pen from '../images/Pen.png'
import ph from '../images/pointedhand.png'
import message from '../images/Message.png'
import snb from '../images/SellandBuy.png'
import '../styles/forum.css'
function ForumbuysellContent(){
    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Chợ Nhà Nông - Mua Bán Rao Vặt Nông Nghiệp</h3>
                </div>
                <div className='content-news-first'>
                    <h3>Mua Bán</h3>
                </div>
                <Col lg="6">
                    
                </Col>
            </Row>
        </Container>
    );
}


export default ForumbuysellContent;