import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import TimeAgo from '../../store/TimeAgo';
import { Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { apiUrl } from '../../../Constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentReplyId } from '../../features/comments/commentSlice';
import ReplyComment from './ReplyComment';
import { GetUserId } from '../../features/users/allUserSlice';
import { commentFetch } from '../../features/comments/commentFetch';
import { useNotification } from 'use-toast-notification';
import Row from 'react-bootstrap/Row';
import { getCommentWithoutPostId } from '../../features/answers/answersSlice';
import { answerFetch } from '../../features/answers/answersFetch';
const CommentContainer = ({userInfo, item, idx}) => {
    const [replying, setReplying] = useState(false);
    const handleReply = () => {
        setReplying(!replying);
    }

    const [text, setText] = useState('');
    const comments = useSelector((state) => getCommentReplyId(state, item._id))
    const user = useSelector((state) => GetUserId(state, item.UserID))
    const [copyComment, setCopyComment] = useState(comments);
    const [editAuth, setEditAuth] = useState(false);
    const dispatch = useDispatch();
    const notification = useNotification();
    const [edit, setEdit] = useState(false);
    const [deleted, setDelete] = useState(false);
    const [editText, setEditText] = useState(item.AContent);
    const handlePostReply = async() => {
        const response = await axios.post(`${apiUrl}/ver1/authenticate/comment`, {
            UserID: userInfo.id,
            AnswerID: item._id,
            CContent: text,
            access_token: userInfo.token
        })
        if(response.data){
            dispatch(commentFetch());
            setCopyComment([...copyComment, response.data.question[0]])
            notification.show({
                message: 'Bình luận thành công', 
                title: 'Delivery Status',
                variant: 'success'
            })
            setText('');
        }
    }

    const handleEditAnswer = () => {
        setEdit(!edit);
    }

    const handleDeleteAnswer = () => {
        setDelete(!deleted);
    }

    const handleDelete = async(e) => {
        const response = await axios.delete(`${apiUrl}/ver1/authenticate/answers/${item._id}`,{
            headers:{
                "access_token":  userInfo.token
            },
            AnswerId: item._id,
        })
        
        if(response.data){
            dispatch(answerFetch());
            setTimeout(() => {
                window.location.reload();
            }, 2000)
            setDelete(!deleted);
            notification.show({
                message: 'Xóa thành công', 
                title: 'Delivery Status',
                variant: 'success'
            })
        }

    }

    const handleEdit = async() => {
        const response = await axios.put(`${apiUrl}/ver1/authenticate/answers/${item._id}`, {
            access_token: userInfo.token,
            AContent: editText
        })

        if(response.data){
            setEdit(!edit);
            notification.show({
                message: 'Chỉnh sửa thành công', 
                title: 'Delivery Status',
                variant: 'success'
            })
            dispatch(commentFetch());
        }
    }

    useEffect(() => {
        if(userInfo){
            if(userInfo.id === item.UserID){
                setEditAuth(true)
            }
        }
    }, [copyComment])


    return (
        <div key={idx} className="comment-all">
            <Row>
                <div className='comment-container-all-users-array'>
                    <Col lg="2">
                        <div className="d-flex">
                            <Link to={`/profile/${user[0]._id}`}>
                                <img src={user[0].Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"} alt="avatar"/>
                            </Link>
                            <h6 className="comment-name-user">{user[0].UserName}</h6>
                        </div>
                    </Col>
                    <Col lg="10">
                    {
                        edit?
                        (
                            <>
                                <textarea className='textarea-edit-comment' 
                                onChange={(e) => setEditText(e.target.value)} value={editText}></textarea>
                                <Button className='button-edit-comment' onClick={handleEdit}>Chấp nhận</Button>
                            </>
                        ):
                        (
                            <p className="comment-text">{editText}</p>
                        )
                    }
                    {
                        deleted?
                        (
                            <div className='d-flex delete-comment-container'>
                                <p className='font-delete-comment col-lg-9'>Bạn có chắc là sẽ xóa bình luận này không?</p>
                                <Button className='button-delete-comment' onClick={handleDelete}>Xóa</Button>
                            </div>
                        ):
                        (
                            <></>
                        )
                    }
                    </Col>
                    {
                        editAuth?
                        (
                            <Col lg="2" className='edit-delete'>
                                <Link onClick={handleEditAnswer}>Edit</Link>
                                <Link onClick={handleDeleteAnswer}>Delete</Link>
                            </Col>
                        )
                        :
                        (
                            <></>
                        )
                    }
 
                </div>
            </Row>
            {
                userInfo? (
                    <div className='d-flex like-reply-ago'>
                        <Link>Like</Link>
                        <Link onClick={handleReply}>Reply</Link>
                        <TimeAgo timestamp={item.PostedDate} />
                    </div>
                ) : (
                    <TimeAgo timestamp={item.PostedDate} />
                )
            }
            
            {
                comments.map((item, idx) => {
                    if(idx < 10){
                        return(
                            <ReplyComment item={item} />
                        );
                    }
                }
                )
            }

            {
                replying && (
                    <div className="reply-comment-all d-flex">
                        <div>
                            <Link to={`/profile/${userInfo.id}`}>
                                <img src={userInfo.Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"} alt="avatar"/>
                            </Link>
                        </div>
                        <textarea onChange={(e) => setText(e.target.value)} value={text}/>
                        <div className='mt-1'>
                            <Button onClick={handlePostReply}>Đăng</Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CommentContainer