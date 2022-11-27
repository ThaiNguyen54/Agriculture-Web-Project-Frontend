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
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import { postFetch } from '../../features/posts/postFetch';
import { getPostCrop } from '../../features/posts/postSlice';
function ForumbreedContent(){
    
    const {posts} = useSelector((state) => state.post)
    const postBreed = posts.filter((post) => (post.TagName === "Chăn nuôi"))
    const {users} = useSelector((state) => state.user)

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
                    postBreed.map((item) => (
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