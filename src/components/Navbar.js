import notification from '../images/bell.png'
import setting from '../images/setting.png'
import user from '../images/user.png'
import { Outlet, useLocation } from 'react-router-dom'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'
import logo from "../images/AFlogo.png"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a ref={ref} style={{textDecoration: "none"}} onClick={(e) => {
        e.preventDefault();
        onClick(e);}}>
      {children}
      <img className="image-item item-left" src={user} alt="buying"></img>
    </a>
));

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const Forum = async() =>{
      navigate("/forum", {state: {UserName: location.state.UserName}})
    }
    const ForumBreed = async() =>{
      navigate("/forumbreed", {state: {UserName: location.state.UserName}})
    }
    const newfeed = async() =>{
      navigate("/newfeed", {state: {UserName: location.state.UserName}})
    }
    return (
      <div>
      <header>
        <Navbar className='navbar' bg="light" expand="lg" fixed='top'>
          <Container>
              <img onClick={newfeed} src={logo} width="85px" height="55px"/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="me-auto-a" onClick={Forum}>Diễn đàn</Nav.Link>
                <Nav.Link className="me-auto-a" onClick={ForumBreed}>Chăn nuôi</Nav.Link>
                <Nav.Link className="me-auto-a" href="#link">Trồng trọt</Nav.Link>
              </Nav>
              <div className='justify-content-end d-flex'>
                  <Nav.Item><img className="image-item item-left" src={notification} alt="buying"></img></Nav.Item>
                  <Nav.Item><img className="image-item item-left" src={setting} alt="buying"></img></Nav.Item>
                  <Dropdown align="end">
                    <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle}></Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-custom'>
                        <Dropdown.ItemText eventKey="1" className='dropdown-custom-a'>Hello, {location.state.UserName}</Dropdown.ItemText>
                        <Dropdown.Item eventKey="2">Profile</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Settings</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
      </div>
    );
}

export default NavBar;