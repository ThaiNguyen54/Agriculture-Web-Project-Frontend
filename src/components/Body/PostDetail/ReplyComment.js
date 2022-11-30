import React from 'react'
import { useSelector } from 'react-redux'
import { GetUserId } from '../../features/users/allUserSlice'

const ReplyComment = ({item}) => {

    const user = useSelector((state) => GetUserId(state, item.UserID));

    return (
        <div className='reply-comment-all d-flex'>
            <div>
                <img alt="avatar-user" src={user[0].avatarImg}></img>
            </div>
            <p>{item.CContent}</p>
        </div>
    )
}

export default ReplyComment