import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { countPost, getPostId } from '../../features/posts/postSlice';
import profile from '../../../images/profile.png'
import { MDBIcon } from 'mdb-react-ui-kit';
import { GetUserId } from '../../features/users/allUserSlice';

const PostDetail = () => {
    const {postId} = useParams();
    const post = useSelector((state) => getPostId(state, postId))

    const userItem = useSelector((state) => GetUserId(state, post[0].UserID))
    const numPost = useSelector((state) => countPost(state, post[0].UserID))

    return (
        <Row>
            <div className='content-news-first'>
                <Row>
                    <Col lg="10">
                        <h3>{post[0].Title}</h3>
                    </Col>
                    <Col lg="2">
                        <MDBIcon icon='thumbs-o-up' className='m-1' size='2x' />
                    </Col>
                </Row>
            </div>
            <Col lg="12">
                <Container>
                    <div className='detail-post'>
                        <Row>
                            <Col lg="3" className='detail-post-image'>
                                <img src={userItem[0].avatarImg} className="avatar-post" alt="avatar"/>
                                <p className="username-detail-post">{userItem[0].userName}</p>
                                <h6>Số bài đăng: {numPost}</h6>
                            </Col>
                            <Col lg="9" className='detail-post-text'>
                                <p className="detail-post-text-font">{post[0].QContent}</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Col>
        </Row>
    )
}

export default PostDetail