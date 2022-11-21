import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPostId } from '../../features/posts/postSlice';
import profile from '../../../images/profile.png'
const PostDetail = () => {
    const {postId} = useParams();
    const post = useSelector((state) => getPostId(state, postId))

    return (
        <Row>
            <div className='content-news-first'>
                <h3>{post[0].Title}</h3>
            </div>
            <Col lg="12">
                <Container>
                    <div className='detail-post'>
                        <Row>
                            <Col lg="3" className='detail-post-image'>
                                <img src={profile} />
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