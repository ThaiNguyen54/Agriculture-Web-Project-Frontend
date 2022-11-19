import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pen from '../../../images/Pen.png'
import ph from '../../../images/pointedhand.png'
import message from '../../../images/Message.png'
import snb from '../../../images/SellandBuy.png'
import '../../../styles/forum.css'
import PostShow from './ShowPost';
import { useSelector } from 'react-redux';
function ForumbreedContent(){
    const {posts} = useSelector((state) => state.post);
    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Kiến Thức Nhà Nông</h3>
                </div>
                <div className='content-news-first'>
                    <h3>Chăn Nuôi</h3>
                </div>
                {
                    posts.map((item) => (
                        <Col lg="12">
                            <PostShow item={item} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}


export default ForumbreedContent;