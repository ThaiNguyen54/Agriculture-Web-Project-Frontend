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
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../../features/users/allUserSlice';
import { getAllUsers } from '../../features/users/allUserAction';
function NewsForum(){
    const post = useSelector((state) => state.post)
    const {users} = useSelector((state) => state.alluser)
    
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
                                post.posts.map((item, idx) => {
                                    if(idx < 10){
                                        return(
                                            <Link to={`/post/${item._id}`}  className="text-forum-site">
                                                <Card.Text key={idx}>
                                                    <img className='ph' src={ph} width='25rem' alt='q' />
                                                    {item.Title.substring(0, 60)}...
                                                </Card.Text>
                                            </Link>
                                        )
                                    }
                                    }
                                )    
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