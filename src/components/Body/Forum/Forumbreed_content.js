import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../styles/forum.css'
import PostShow from './ShowPost';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Pagination/Pagination';
import { useState, useMemo } from 'react';
import { getPostFromUserId } from '../../features/posts/postSlice';
function ForumbreedContent(){    
    const {posts} = useSelector((state) => state.post)
    const postBreed = posts.filter((post) => (post.TagName === "Chăn nuôi"))

    let PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return postBreed.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Kiến Thức Nhà Nông</h3>
                </div>
                <div className='content-news-first'>
                    <h3>Chăn Nuôi</h3>
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
                totalCount={postBreed.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                />
        </Container>
    );
}


export default ForumbreedContent;