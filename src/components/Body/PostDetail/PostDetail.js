import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link, Navigate, useNavigate, useParams } from 'react-router-dom'
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
import parse from "html-react-parser";
import { likeFetch } from '../../features/likes/likeFetch';
import { useModal } from 'react-hooks-use-modal';
import { render } from 'react-dom';
import { postFetch } from '../../features/posts/postFetch';

const PostDetail = () => {
    const {postId} = useParams();
    const post = useSelector((state) => getPostId(state, postId))
    const dispatch = useDispatch();
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    const {userInfo} = useSelector((state) => state.user)
    const userProfile = useSelector((state) => GetUserId(state, userInfo.id));
    const userItem = useSelector((state) => GetUserId(state, post[0].UserID))
    const numPost = useSelector((state) => countPost(state, post[0].UserID))
    const [text, setText] = useState('');
    const answers = useSelector((state) => getCommentPostId(state, postId));
    const [allanswers, setAllAnswers] = useState(answers);
    const notification = useNotification();
    let likes = useSelector((state) => likeCountPost(state, postId));
    const [likeCount, setLikeCount] = useState(likes);
    const [flagname, setFlagName] = useState("");
    const navigate = useNavigate();
    const handleFlag = async() => {
        const addFlag = await axios.post(`${apiUrl}/ver1/authenticate/flag`, {
            QuestionID: postId,
            access_token: userInfo.token,
            UserID: userInfo.id,
            FlagName: flagname
        })
        if(addFlag.data.success){
            notification.show({
                message: 'Cảm ơn bạn đã báo cáo', 
                title: 'Delivery Status',
                variant: 'success'
            })
            close();
        }
    }

    const handleDeletePost = async() => {
        const deleteQuestion = await axios.delete(`${apiUrl}/ver1/authenticate/questions/${postId}`, {
            headers:{
                "access_token":  userInfo.token
            }
        })
        if(deleteQuestion){
            dispatch(postFetch());
            setTimeout(() => {
                window.location.reload(false);
            }, 1000)
            navigate("/forum");
        }
    }


    const handleLikePost = async(e) => {
        e.preventDefault();
        const response = await axios.post(`${apiUrl}/ver1/authenticate/post-like`, {
            UserID: userInfo.id,
            QuestionID: postId,
            access_token: userInfo.token
        })
        dispatch(likeFetch());
        if(response.data.success === false){
            setLikeCount(likes--);
        }else{
            setLikeCount(likes++);
            window.location.reload(false);
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
                                <Link className='flag-report' onClick={open}><i class="fa fa-flag fa-2x" aria-hidden="true"></i><p>Báo cáo bài viết</p></Link>
                                <Modal>
                                    <div className='popup-content-report'>
                                        <Row>
                                            <h1>Báo cáo bài viết</h1>
                                        </Row>
                                        <Row>
                                            <textarea onChange={(e) => setFlagName(e.target.value)}></textarea>
                                        </Row>
                                        <div className='popup-button'>
                                            <Button variant="danger" onClick={handleFlag}>Báo cáo</Button>
                                            <Button variant="primary" onClick={close}>Từ chối</Button>
                                        </div>
                                    </div>
                                </Modal>
                            </Col>
                            <Col lg="9" className='detail-post-text'>
                                <div className="detail-post-text-font">{parse(post[0].QContent)}</div>
                                <img className="image-post-content" src={post[0].Image}></img>
                            </Col>
                        </Row>
                        {
                            userProfile[0].UserRight ==="ADMIN"?
                            <div className='d-flex justify-content-center'>
                                <Button onClick={handleDeletePost}>Delete</Button>
                            </div>
                            : <></>
                        }

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