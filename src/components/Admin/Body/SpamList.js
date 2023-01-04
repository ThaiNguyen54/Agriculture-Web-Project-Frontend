import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SpamCheck from '../../Body/Forum/SpamCheck';
import Table from 'react-bootstrap/Table';
import { GetUserId } from '../../features/users/allUserSlice';
import SpamUser from './SpamUser';
import { reportFetch } from '../../features/reports/reportFetch';
import { postFetch } from '../../features/posts/postFetch';


const SpamList = () => {
    const dispatch = useDispatch();
    dispatch(reportFetch());
    dispatch(postFetch());
    const {posts} = useSelector((state) => state.post);

    let i = 0;
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Tiêu đề</th>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Xóa</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((item) => {
                    if(SpamCheck(item.Title)){
                        i++
                        return(
                            <SpamUser item={item} idx={i}/>
                        )
                    }
                })
            }
            </tbody>
        </Table>
    )
}

export default SpamList