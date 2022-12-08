import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../styles/profile.css"
import Nav from 'react-bootstrap/Nav';
import { Link, useParams } from 'react-router-dom'
import "../../styles/menu2.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostFromUserId } from '../features/posts/postSlice';
import { useMemo, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import PostShowSetting from './showpostsetting';


function Postsetting() {
  const {userId} = useParams()
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => getPostFromUserId(state, userId))
  const Navigate = useNavigate()

  
  let PageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return post.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
  return (
    <>
    {
            user.userInfo? (
              <Container>
                <Row>
                    <Nav className="me-auto">
                        <div className='box3'>
                            <Link className="me-auto-a" to={`/profilesetting/${user.userInfo.id}`}>Cài Đặt Tài Khoản</Link>
                        </div>
                        <div className='box4'>
                            <Link className="me-auto-a" to={`/postsetting/${user.userInfo.id}`}>Bài Đăng Của Bạn</Link>
                        </div>
                    </Nav>
                    <div className='roww'></div>
                </Row> 
                {
                  
                  currentTableData.map((item) => (
                      <PostShowSetting item={item} />
                  ))
                }
                <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={post.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                />
              </Container>
            ) : (
                Navigate('/')
            )
        }
      
    </>
  )
}

export default Postsetting;