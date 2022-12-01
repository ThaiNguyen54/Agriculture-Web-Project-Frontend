import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../styles/forum.css'
import PostShow from './ShowPost';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../Pagination/Pagination';

function ForumcropContent(){
    const {posts} = useSelector((state) => state.post)

    const postCrop = posts.filter((post) => (post.TagName === "Trồng trọt"))
    let PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return postCrop.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Kiến Thức Nhà Nông - Trồng Trọt</h3>
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
                totalCount={postCrop.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                />
        </Container>
    );
}


export default ForumcropContent;