import React from 'react'
import { useSelector } from 'react-redux'
import { GetUserId } from '../../features/users/allUserSlice'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { apiUrl } from '../../../Constants/constants'
const SpamUser = ({item, idx}) => {
    const user = useSelector((state) => GetUserId(state, item.UserID))
    const {userInfo} = useSelector((state) => state.user)

    const deletePost = async() => {
        const deleteQuestion = await axios.delete(`${apiUrl}/ver1/authenticate/questions/${item._id}`, {
            headers:{
                "access_token":  userInfo.token
            }
        })
        if(deleteQuestion){
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }
    }
    return (
        <tr>
            <td>{idx}</td>
            <td>{item.Title.substring(0, 20)}...</td>
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