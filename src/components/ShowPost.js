import avatar from '../images/user1.png'
import comment from '../images/comment.png'
import check from '../images/double-check.png'
function PostShow(){
    return(
        <div className='create-post-forum post-show'>
            <a href='/' style={{textDecoration: "none"}}>
                <div className="avt-name-post d-flex">
                    <img src={avatar}></img>
                    <p>Tín</p>
                    <p style={{marginLeft: "1.5rem", fontSize: "0.85rem"}}>5 phút trước</p>
                </div>
                <div className="script-post">
                    <p>Trùn quế giống Đắk Lắk, Gia Lai</p>
                </div>
                <div className="d-flex post-tag">
                    <p>Mua bán</p>
                    <p>Ngành trồng trọt</p>
                </div>
                <div className="d-flex comment-post-title">
                    <img src={check}></img>
                    <p>Đã xem: 20</p>
                    <img src={comment}></img>
                    <p>Trả lời: 15</p>
                </div>
            </a>
        </div>
    );
}

export default PostShow;