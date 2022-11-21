import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pen from '../../../images/Pen.png'
import ph from '../../../images/pointedhand.png'
import message from '../../../images/Message.png'
import snb from '../../../images/SellandBuy.png'
import '../../../styles/forum.css'
import { useSelector } from 'react-redux';

function NewsForum(){
    const post = useSelector((state) => state.post)
    console.log(post);
    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Danh Sách Diễn Đàn</h3>
                </div>
                <Col lg="6">
                    <Card className='Card'>
                        <Card.Header className='cardh'>
                            <img className='Pen' src={Pen} width='40rem' alt='q'/>
                            <span>Bài Viết Mới </span>
                        </Card.Header>
                        <Card.Body className='cardbg'>
                            {
                                post.posts.map((item, idx) => (
                                    <Card.Text key={idx}>
                                        <img className='ph' src={ph} width='25rem' alt='q' />
                                        {item.Title}
                                    </Card.Text>

                                ))    
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6">
                <Card className='Card'>
                        <Card.Header className='cardh'>
                            <img className='Pen' src={message} width='40rem' alt='q'/>
                            <span>Câu Hỏi Mới </span>
                        </Card.Header>
                        <Card.Body className='cardbg'>
                        <Card.Text >
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6">
                <Card className='Card'>
                        <Card.Header className='cardh'>
                            <img className='Pen' src={snb} width='40rem' alt='q'/>
                            <span>Mua Bán Mới </span>
                        </Card.Header>
                        <Card.Body className='cardbg'>
                        <Card.Text >
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6">
                <Card className='Card'>
                        <Card.Header className='cardh'>
                            <img className='Pen' src={snb} width='40rem' alt='q'/>
                            <span>Mua Bán Mới </span>
                        </Card.Header>
                        <Card.Body className='cardbg'>
                        <Card.Text >
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            <img className='ph' src={ph} width='25rem' alt='q'/>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col lg="12">
                <Card className='Card'>
                        <Card.Header className='cardh2'>
                            <span>KIẾN THỨC NÔNG NGHIỆP </span>
                        </Card.Header>
                        <Card.Body className='cardbg'>
                        <Card.Text >
                    
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col lg="12">
                <Card className='Card'>
                        <Card.Header className='cardh3'>
                            <span>CHỢ NHÀ NÔNG </span>
                        </Card.Header>
                        <Card.Body className='cardbg'>
                        <Card.Text >
                    
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        <Card.Text>
                            
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default NewsForum;