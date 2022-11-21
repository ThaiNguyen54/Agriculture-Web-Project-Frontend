import user from '../../images/user.png'
import notification from '../../images/bell.png'
import setting from '../../images/setting.png'
import { Outlet} from 'react-router-dom'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../../images/AFlogo.png"
import { Link } from 'react-router-dom'
import "../../styles/navbar.css"
import { Col, Dropdown, Row } from 'react-bootstrap';
import { logout } from '../features/users/userSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Scrollnews from '../Scroll_news'
import ForumOption from '../Body/Forum/Forum_option';
import WeatherContent from '../Weather_content';
import FooterPage from '../Footer/Footer'


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a ref={ref} style={{textDecoration: "none"}} onClick={(e) => {
        e.preventDefault();
        onClick(e);}}>
      {children}
      <img className="image-item item-left" src={user} alt="buying"></img>
    </a>
));

const NavBar = () => {
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
                    <Nav.Item><img className="image-item item-left" src={setting} alt="buying"></img></Nav.Item>
                    <Dropdown align="end">
                      <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle}></Dropdown.Toggle>
                      <Dropdown.Menu className='dropdown-custom'>
                          <Dropdown.ItemText eventKey="1" className='dropdown-custom-a'>Hello, {user.userInfo.UserName}</Dropdown.ItemText>
                          <Dropdown.Item eventKey="2">Profile</Dropdown.Item>
                          <Dropdown.Item eventKey="3">Settings</Dropdown.Item>
                          <Dropdown.Item eventKey="1" onClick={() => dispatch(logout())}>Log out</Dropdown.Item>
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
                    <Col lg="2">
                      <ForumOption />
                    </Col>
                    <Col lg="8">
                      <Outlet />
                    </Col>
                    <Col lg="2">
                      <WeatherContent />
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