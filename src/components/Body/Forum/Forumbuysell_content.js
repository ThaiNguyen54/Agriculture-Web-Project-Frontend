import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../styles/forum.css'
import { useReducer } from 'react';
import { getPostCrop } from '../../features/posts/postSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostShow from './ShowPost';
function ForumbuysellContent(){
    const {posts} = useSelector((state) => state.post)
    const postSell = posts.filter((post) => (post.TagName === "Mua bán"))
    const {users} = useSelector((state) => state.user)

    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Chợ Nhà Nông - Mua Bán Rao Vặt Nông Nghiệp</h3>
                </div>
                <div className='content-news-first'>
                    <h3>Mua Bán</h3>
                </div>
                    {
                        postSell.map((item) => (
                        <Col lg="12">
                            <PostShow item={item} />
                        </Col>
                    ))
                    }
            </Row>
        </Container>
    );
}


export default ForumbuysellContent;