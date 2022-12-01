
import comment from '../../images/comment.png'
import check from '../../images/double-check.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetUserId } from '../features/users/allUserSlice';
import TimeAgo from '../store/TimeAgo';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../../styles/postsetting.css"
import axios from 'axios';
import { apiUrl } from '../../Constants/constants';
import { useNotification } from 'use-toast-notification';

function PostShowSetting({item}){
    const notification = useNotification();
    const [deleted, setDelete] = useState(false)
    const userItem = useSelector((state) => GetUserId(state, item.UserID))
    const user = useSelector((state) => state.user);

    const handleDeleteQuestion = () => {
        setDelete(!deleted);
    }

    const handleDelete = async(e) => {
        const response = await axios.delete(`${apiUrl}/ver1/questions/${item._id}?accessUserId=${item.UserID}`,{
            access_token: user.userInfo.token,
        })

        window.location.reload(false);
        
        if(response.data){
            setDelete(!deleted);
        }
    }

    return(
        <div className='create-post-forum post-show'>
            <Link to={`/post/${item._id}`} style={{textDecoration:"none"}}>
            <div className="avt-name-post d-flex">
                <img src={userItem[0].avatarImg || "https://cdn-icons-png.flaticon.com/512/44/44948.png"} style={{borderRadius: "100%"}}></img>
                <p>{userItem[0].userName}</p>
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
                <p>Đã xem: 20</p>
                <img src={comment}></img>
                <p>Trả lời: 15</p>
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
                <Button className='buttons'>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </Button>
                <Button className='buttons' onClick={handleDeleteQuestion}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </Button>
            </div>
        </div>
    );
}

export default PostShowSetting;