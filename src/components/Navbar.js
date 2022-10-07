import notification from '../images/bell.png'
import setting from '../images/setting.png'
import user from '../images/user.png'
import cicada from '../images/explore.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Scrollnews from './Scroll_news'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} style={{textDecoration: "none"}} onClick={(e) => {
        e.preventDefault();
        onClick(e);}}>
      {children}
      <img className="image-item item-left" src={user} alt="buying"></img>
    </a>
));

const NavBar = () => {
    const [displayDropdown, setDisplayDropdown] = useState(true);
    const location = useLocation();
    const HandleDropdown = async() => {
        setDisplayDropdown(!displayDropdown);
    }
    return (
      <header>
        <Navbar className='navbar' bg="light" expand="lg" fixed='top'>
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="me-auto-a" href="#link">Diễn đàn</Nav.Link>
                <Nav.Link className="me-auto-a" href="#home">Chăn nuôi</Nav.Link>
                <Nav.Link className="me-auto-a" href="#link">Trồng trọt</Nav.Link>
              </Nav>
              <div className='justify-content-end d-flex'>
                  <Nav.Item><img className="image-item item-left" src={notification} alt="buying"></img></Nav.Item>
                  <Nav.Item><img className="image-item item-left" src={setting} alt="buying"></img></Nav.Item>
                  <Dropdown align="end">
                    <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle}></Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-custom'>
                        <Dropdown.ItemText eventKey="1" className='dropdown-custom-a'>Hello, {location.state.lname}</Dropdown.ItemText>
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
    );
}

export default NavBar;