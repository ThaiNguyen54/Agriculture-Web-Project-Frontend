import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet, useNavigate} from 'react-router-dom'
import { Col, Dropdown, Row } from 'react-bootstrap';
import "../../../styles/Admin.css"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { reportFetch } from '../../features/reports/reportFetch';
const NavbarAdmin = () => {
    const dispatch = useDispatch();
    dispatch(reportFetch());
    return (
        <div>
            <Row className="slidebar-column">
                <Col lg="12 m-0 p-0">
                    <div className="sidebar">
                        <nav className="navbar bg-light navbar-light">
                            <a href="/" className="navbar-brand mx-4 mb-3">
                                <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>ADMIN AGRIT</h3>
                            </a>
                            <Link to="/" className='switch-user'><i class="fa fa-refresh" aria-hidden="true"></i>Quay lại người dùng</Link>
                            <div className="d-flex align-items-center ms-4 mb-4">
                                <div className="position-relative">
                                    <img className="rounded-circle" src="img/user.jpg" alt=""/>
                                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </Col>
            </Row>
            <Row className="slidebar-column">
                <Col lg="2">
                <nav className='navbar navbar-admin slidebar-column'>
                    <div className="navbar-nav w-100 navbar-admin">
                        <Link to="spamlist" className='nav-item nav-link'><i className="fa fa-tachometer-alt me-2"></i>Bài viết spam</Link>
                        <Link to="reportlist" className='nav-item nav-link'><i className="fa fa-tachometer-alt me-2"></i>Bài viết bị báo cáo</Link>
                    </div>
                </nav>
                </Col>
                <Col lg="9" >
                    <Outlet />
                </Col>
            </Row>
        </div>
  )
}

export default NavbarAdmin;
