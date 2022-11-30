import avatar from '../../../images/user1.png'
import comment from '../../../images/comment.png'
import check from '../../../images/double-check.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserId } from '../../features/users/allUserSlice';
import TimeAgo from '../../store/TimeAgo';
import { useEffect } from 'react';

function PostShow({item}){

    const userItem = useSelector((state) => GetUserId(state, item.UserID))

    return(
        <div className='create-post-forum post-show'>
            <Link to={`/post/${item._id}`} style={{textDecoration:"none"}}>
            <div className="avt-name-post d-flex">
                <img src={userItem[0].avatarImg} style={{borderRadius: "100%"}}></img>
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
        </div>
    );
}

export default PostShow;