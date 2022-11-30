import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../styles/forum.css'
import { useReducer } from 'react';
import { getPostCrop } from '../../features/posts/postSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import Pagination from '../../Pagination/Pagination';
import PostShow from './ShowPost';
function ForumbuysellContent(){
    const {posts} = useSelector((state) => state.post)
    const postSell = posts.filter((post) => (post.TagName === "Mua bán"))
    const {users} = useSelector((state) => state.user)

    let PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return postSell.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Chợ Nhà Nông - Mua Bán Rao Vặt Nông Nghiệp</h3>
                </div>
                <div className='content-news-first'>
                    <h3>Mua Bán</h3>
                </div>
                    {
                        currentTableData.map((item) => (
                        <Col lg="12">
                            <PostShow item={item} />
                        </Col>
                    ))
                    }
            </Row>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={postSell.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                />
        </Container>
    );
}


export default ForumbuysellContent;