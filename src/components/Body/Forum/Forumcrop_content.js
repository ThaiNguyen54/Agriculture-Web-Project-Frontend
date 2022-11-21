import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../styles/forum.css'
import PostShow from './ShowPost';
import { useSelector } from 'react-redux';
function ForumcropContent(){
    const {posts} = useSelector((state) => state.post)

    const postCrop = posts.filter((post) => (post.TagName === "Trồng trọt"))
    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Kiến Thức Nhà Nông</h3>
                </div>
                <div className='content-news-first'>
                    <h3>Trồng Trọt</h3>
                </div>
                    {
                        postCrop.map((item) => (
                        <Col lg="12">
                            <PostShow item={item} />
                        </Col>
                    ))
                    }
            </Row>
        </Container>
    );
}


export default ForumcropContent;