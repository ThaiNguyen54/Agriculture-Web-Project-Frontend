import avatar from '../../../images/user1.png'
import comment from '../../../images/comment.png'
import check from '../../../images/double-check.png'
import { Link } from 'react-router-dom';
function PostShow({item}){
    return(
        <div className='create-post-forum post-show'>
            <Link to={`/post/${item._id}`} style={{textDecoration:"none"}}>
            <div className="avt-name-post d-flex">
                <img src={avatar}></img>
                <p>Tín</p>
                <p style={{marginLeft: "1.5rem", fontSize: "0.85rem"}}>5 phút trước</p>
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