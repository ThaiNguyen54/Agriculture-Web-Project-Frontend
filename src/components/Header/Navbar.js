import User from '../../images/user.png'
import notification from '../../images/bell.png'
import setting from '../../images/setting.png'
import { Outlet, useNavigate} from 'react-router-dom'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../../images/AFlogo.png"
import { Link } from 'react-router-dom'
import "../../styles/navbar.css"
import { Col, Dropdown, Row } from 'react-bootstrap';
import { logout } from '../features/user/userSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Scrollnews from '../Scroll_news'
import ForumOption from '../Body/Forum/Forum_option';
import FooterPage from '../Footer/Footer'


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a ref={ref} style={{textDecoration: "none"}} onClick={(e) => {
        e.preventDefault();
        onClick(e);}}>
      {children}
      
    </a>
));



const NavBar = () => {
    const Navigate = useNavigate()
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
      <div>
      <header>
        <Navbar className='navbar' bg="light" expand="lg" fixed='top'>
          <Container>
              <Link to="/">
                <img src={logo} width="85px" height="55px"/>
              </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="me-auto-a" to="/forum">Diễn đàn</Link>
                <Link className="me-auto-a" to="/forumbreed">Chăn nuôi</Link>
                <Link className="me-auto-a" to="/forumcrop">Trồng trọt</Link>
                <Link className="me-auto-a" to="/buysell">Mua Bán</Link>
              </Nav>
              {
                user.userInfo?
                (
                  <div className='justify-content-end d-flex'>
                    <div className="button-navbar">
                      <Link className='button-post' to={`uploadpost/accessUserId=${user.userInfo.id}`}>Đăng bài</Link>
                    </div>
                    <Nav.Item><img className="image-item item-left" src={notification} alt="buying"></img></Nav.Item>
                    <Nav.Item onClick={() => Navigate(`/profilesetting/${user.userInfo.id}`)}><img className="image-item item-left" src={setting} alt="buying"></img></Nav.Item>
                    <Dropdown align="end">
                      <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle} style="border-radius: 50%;">
                        <img className="image-item item-left" src={user.userInfo.Avatar || User} alt="buying"></img>  
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='dropdown-custom'>
                          <Dropdown.ItemText eventKey="1" className='dropdown-custom-a'>Xin Chào, {user.userInfo.UserName}</Dropdown.ItemText>
                          <Dropdown.Item eventKey="2" onClick={() => Navigate(`/profile/${user.userInfo.id}`)}>Tài Khoản</Dropdown.Item>
                          <Dropdown.Item eventKey="3" onClick={() => Navigate(`/profilesetting/${user.userInfo.id}`)}>Cài Đặt</Dropdown.Item>
                          <Dropdown.Item eventKey="1" onClick={() => dispatch(logout())}>Đăng Xuất</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ):
                (
                  <>
                    <div className="button-navbar">
                      <a className="btn btn-primary login-button" href='/login'>Đăng nhập</a>
                    </div>
                  </>        
                )
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
        <div className='all-content-newfeed'>
          <Scrollnews />
            <div className='body-content d-flex'>
                <Container className="dis-flex">
                  <Row className="w-100">
                    <Col lg="3">
                      <ForumOption />
                    </Col>
                    <Col lg="9">
                      <Outlet />
                    </Col>
                  </Row>
                </Container>
            </div>
        </div>
        <FooterPage />
      </div>
    );
}

export default NavBar;