import React from 'react'
import { useSelector } from 'react-redux'
import { GetUserId } from '../../features/users/allUserSlice'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { apiUrl } from '../../../Constants/constants'
import { Link } from 'react-router-dom'
import { reportFetch } from '../../features/reports/reportFetch'
import { useDispatch } from 'react-redux'
const SpamUser = ({item, idx}) => {
    const user = useSelector((state) => GetUserId(state, item.UserID))
    const {userInfo} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const deletePost = async() => {
        const deleteQuestion = await axios.delete(`${apiUrl}/ver1/authenticate/questions/${item._id}`, {
            headers:{
                "access_token":  userInfo.token
            }
        })
        if(deleteQuestion){
            setTimeout(() => {
                dispatch(reportFetch());
                window.location.reload();
            }, 2000)
        }
    }
    return (
        <tr>
            <td>{idx}</td>
                <td>
                    <Link to={`/post/${item._id}`}>
                        {item.Title.substring(0, 20)}...
                    </Link>
                </td>
            <td>{user[0].UserName}</td>
            <td>{user[0].Email}</td>
            <td>
                <div className='button-authen'>
                    <Button variant="primary"><i class="fa fa-check" aria-hidden="true"></i></Button>
                    <Button variant="danger" onClick={deletePost}><i class="fa fa-ban" aria-hidden="true"></i></Button>
                </div>
            </td>
        </tr>
    )
}

export default SpamUser