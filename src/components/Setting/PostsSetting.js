import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../styles/profile.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import "../../styles/menu2.css"
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import comment from '../../images/comment.png'
import check from '../../images/double-check.png'


function Postsetting() {
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate()
  return (
    <>
    {
            user.userInfo? (
              <Container>
                <Row>
                    <Nav className="me-auto">
                        <div className='box3'>
                            <Link className="me-auto-a" to="/profilesetting">Cài Đặt Tài Khoản</Link>
                        </div>
                        <div className='box4'>
                            <Link className="me-auto-a" to="/postsetting">Bài Đăng Của Bạn</Link>
                        </div>
                    </Nav>
                    <div className='roww'></div>
                </Row> 
                
                
              </Container>
            ) : (
                Navigate('/')
            )
        }
      
    </>
  )
}

export default Postsetting;