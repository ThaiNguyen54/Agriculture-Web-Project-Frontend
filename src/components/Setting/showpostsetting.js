
import comment from '../../images/comment.png'
import check from '../../images/double-check.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserId } from '../features/users/allUserSlice';
import TimeAgo from '../store/TimeAgo';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../../styles/postsetting.css"
import axios from 'axios';
import { apiUrl } from '../../Constants/constants';
import { getCommentCount } from '../features/answers/answersSlice';
import { likeCountPost } from '../features/likes/likeSlice';
import { postFetch } from '../features/posts/postFetch';



function PostShowSetting({item}){
    const [deleted, setDelete] = useState(false)
    const userItem = useSelector((state) => GetUserId(state, item.UserID))
    const user = useSelector((state) => state.user);
    const comments = useSelector((state) => getCommentCount(state, item._id))
    const likes = useSelector((state) => likeCountPost(state, item._id));
    const dispatch = useDispatch();
    const handleDeleteQuestion = () => {
        setDelete(!deleted);
    }

    const handleDelete = async(e) => {
        const response = await axios.delete(`${apiUrl}/ver1/authenticate/questions/${item._id}`,{
            headers:{
                "access_token":  user.userInfo.token
            }
        })
        
        if(response.data){
            dispatch(postFetch());
            setTimeout(() => {
                window.location.reload();
            }, 1500)
            setDelete(!deleted);
        }
    }

    return(
        <div className='create-post-forum post-show'>
            <Link to={`/post/${item._id}`} style={{textDecoration:"none"}}>
            <div className="avt-name-post d-flex">
                <img src={userItem[0].Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"} style={{borderRadius: "100%"}}></img>
                <p>{userItem[0].UserName}</p>
                <TimeAgo timestamp={item.PostedDate} />
            </div>
            <div className="script-post">
                <p>{item.Title}</p>
            </div>
            <div className="d-flex post-tag">
                <p>{item.TagName}</p>
            </div>
            <div className="d-flex comment-post-title">
                <img src={check}></img>
                <p>Lượt thích: {likes}</p>
                <img src={comment}></img>
                <p>Trả lời: {comments}</p>
            </div>
            </Link>
            {
                deleted?
                    (
                        <div className='deleteQ'>
                            <p className='font-delete-comment col-lg-9'>Bạn có chắc là sẽ xóa bài viết này không?</p>
                            <Button className='button-delete-comment' onClick={handleDelete}>Xóa</Button>
                        </div>
                    ):
                (
                    <></>
                )
            }
            <div className='butt'>
                <Link to={`/editpost/${item._id}`}>
                    <Button className='buttons' >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </Button>
                </Link>
                <Button className='buttons' onClick={handleDeleteQuestion}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    );
}

export default PostShowSetting;