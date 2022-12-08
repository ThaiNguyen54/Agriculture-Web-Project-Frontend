import React from 'react'
import { useSelector } from 'react-redux'
import { GetUserId } from '../../features/users/allUserSlice'
import { Button } from 'react-bootstrap'
const SpamUser = ({item, idx}) => {
    const user = useSelector((state) => GetUserId(state, item.UserID))

    return (
        <tr>
            <td>{idx}</td>
            <td>{item.Title.substring(0, 20)}...</td>
            <td>{user[0].UserName}</td>
            <td>{user[0].Email}</td>
            <td>
                <div>
                    <Button variant="primary"><i class="fa fa-check" aria-hidden="true"></i></Button>
                    <Button variant="danger"><i class="fa fa-ban" aria-hidden="true"></i></Button>
                </div>
            </td>
        </tr>
    )
}

export default SpamUser