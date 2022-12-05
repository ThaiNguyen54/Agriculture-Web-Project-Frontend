import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams } from 'react-router-dom'
import { countPost, getPostId } from '../../features/posts/postSlice';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { GetUserId } from '../../features/users/allUserSlice';
import axios from 'axios';
import "../../../styles/postdetail.css"
import { apiUrl } from '../../../Constants/constants';
import { getCommentPostId } from '../../features/answers/answersSlice';
import { useNotification } from 'use-toast-notification';
import { answerFetch } from '../../features/answers/answersFetch';
import CommentContainer from './CommentContainer';
import { likeCountPost } from '../../features/likes/likeSlice';
import { likeFetch } from '../../features/likes/likeFetch';
const PostDetail = () => {
    const {postId} = useParams();
    const post = useSelector((state) => getPostId(state, postId))
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state) => state.user)
    const userItem = useSelector((state) => GetUserId(state, post[0].UserID))
    const numPost = useSelector((state) => countPost(state, post[0].UserID))
    const [text, setText] = useState('');
    const answers = useSelector((state) => getCommentPostId(state, postId));
    const [allanswers, setAllAnswers] = useState(answers);
    const notification = useNotification();
    let likes = useSelector((state) => likeCountPost(state, postId));
    const [likeCount, setLikeCount] = useState(likes);

    const handleLikePost = async(e) => {
        e.preventDefault();
        const response = await axios.post(`${apiUrl}/ver1/authenticate/post-like`, {
            UserID: userInfo.id,
            QuestionID: postId,
            access_token: userInfo.token
        })
        
        if(response.data.success === false){
            dispatch(likeFetch());
            setLikeCount(likes--);
        }
        if(response.data.success){
            dispatch(likeFetch());
            setLikeCount(likes++);
        }
    }

    const submitComment = async() => {
        const response = await axios.post(`${apiUrl}/ver1/authenticate/answer`, {
            UserID: userInfo.id,
            QuestionID: postId,
            AContent: text,
            access_token: userInfo.token
        })

        if(response.data){
            dispatch(answerFetch());
            setAllAnswers([...allanswers, response.data.answer[0]]);
            notification.show({
                message: 'Bình luận thành công', 
                title: 'Delivery Status',
                variant: 'success'
            })
            setText('');
        }
    }

    return (
        <Row>
            <div className='content-news-first'>
                <Row>
                    <Col lg="10">
                        <h3>{post[0].Title}</h3>
                    </Col>
                    <Col lg="2" className="d-flex">
                        <Link onClick={handleLikePost}>
                            <MDBIcon icon='thumbs-o-up' className='m-1' size='2x' />
                        </Link>
                        <h3 className='like-count-font'>{likeCount}</h3>
                    </Col>
                </Row>
            </div>
            <Col lg="12">
                <Container>
                    <div className='detail-post'>
                        <Row>
                            <Col lg="3" className='detail-post-image'>
                                <Link to={`/profile/${userItem[0]._id}`}>
                                    <img src={userItem[0].Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"} className="avatar-post" alt="avatar"/>
                                </Link>
                                <p className="username-detail-post">{userItem[0].UserName}</p>
                                <h6>Số bài đăng: {numPost}</h6>
                            </Col>
                            <Col lg="9" className='detail-post-text'>
                                <p className="detail-post-text-font">{post[0].QContent}</p>
                                <img className="image-post-content" src={post[0].Image}></img>
                            </Col>
                        </Row>
                        {
                            userInfo? (
                                <Row className='comment-container'>
                                    <Col lg="12" style={{padding: "0"}}>
                                        <h6>BÌNH LUẬN</h6>
                                        <div className='leave-our-comment d-flex'>
                                            <div>
                                                <Link to={`/profile/${userInfo.id}`}>
                                                    <img src={userInfo.Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"} alt="avatar" />
                                                </Link>
                                            </div>
                                            <textarea type="text" placeholder={`Bình luận công khai bằng ` + userInfo.UserName} 
                                            onChange={(e) => setText(e.target.value)} value={text}/>
                                            <div className="button-post-comment">
                                                <Button onClick={submitComment}>Đăng</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            ):(
                                <Button className='buttonl'>
                                    <a className='buttonlogin' href='/login'>Đăng nhập để bình luận bài viết này</a>
                                </Button>
                            )
                        }
                        <Row className="comment-container-all-users">
                            <Col lg="12">
                                {
                                    allanswers.map((item, idx) => {
                                        if(idx < 10){
                                            return(
                                                <CommentContainer userInfo={userInfo} item={item} idx={idx}/>
                                            );
                                        }
                                    })
                                }
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Col>
        </Row>
    )
}

export default PostDetail