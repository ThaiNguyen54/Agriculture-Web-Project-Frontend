import React from 'react'
import { useSelector } from 'react-redux'
import { GetUserId } from '../../features/users/allUserSlice'
import { Link } from 'react-router-dom'
import TimeAgo from '../../store/TimeAgo'

const ReplyComment = ({item}) => {

    const user = useSelector((state) => GetUserId(state, item.UserID));

 
    return (
        <>
            <div className='reply-comment-all d-flex'>
                <div>
                <Link to={`/profile/${user[0]._id}`}>
                    <img alt="avatar-user" src={user[0].Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"}></img>
                </Link>
                </div>
                <h6>{user[0].UserName}</h6>
                <p>{item.CContent}</p>
            </div>
            <div className='comment-time'>
                <TimeAgo timestamp={item.PostedDate} />
            </div>
        </>
    )
}

export default ReplyComment