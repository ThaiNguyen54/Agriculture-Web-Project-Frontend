import React from 'react'
import { useSelector } from 'react-redux'
import { getPostId } from '../../../features/posts/postSlice'
import { GetUserId } from '../../../features/users/allUserSlice'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { apiUrl } from '../../../../Constants/constants'
import { useDispatch } from 'react-redux'
import { reportFetch } from '../../../features/reports/reportFetch'
import { Link } from 'react-router-dom'
const ReportUser = ({idx, item}) => {
    const post = useSelector((state) => getPostId(state, item.QuestionID))
    const user = useSelector((state) => GetUserId(state, item.UserID))
    const {userInfo} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const deletePost = async() => {
        const deleteFlag = await axios.delete(`${apiUrl}/ver1/authenticate/flags/${item._id}`, {
            headers:{
                "access_token":  userInfo.token
            }
        })
        if(deleteFlag.data){
            axios.delete(`${apiUrl}/ver1/authenticate/questions/${post[0]._id}`, {
                headers:{
                    "access_token":  userInfo.token
                }
            })
        dispatch(reportFetch())
        setTimeout(() => {
            window.location.reload();
        }, 2000)
        }
    }
    return (
        <tr>
            <td>{idx}</td>
            <td>{item.FlagName}</td>
            {
                post[0]?
                (
                    <td>
                        <Link to={`/post/${item._id}`}>  
                            {post[0].Title}
                        </Link>
                    </td>
                ):
                (
                    <></>
                )
            }
            <td>{user[0].Email}</td>
            <td>
                <div className="button-authen">
                    <Button variant="primary" ><i class="fa fa-check" aria-hidden="true"></i></Button>
                    <Button variant="danger" onClick={deletePost}><i class="fa fa-ban" aria-hidden="true"></i></Button>
                </div>
            </td>
        </tr>
    )
}

export default ReportUser