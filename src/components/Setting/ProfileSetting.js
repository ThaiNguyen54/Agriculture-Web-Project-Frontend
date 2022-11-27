import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../styles/profile.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import "../../styles/menu1.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { apiUrl } from '../../Constants/constants';

function Profilesetting() {
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate()
  const [users, setUsers] = useState(null)
  console.log(user)

  const handleChange = (e) => {
    const value = e.target.value;
    setUsers({...users, [e.target.name]: value})
  }   

  const handleSubmit = async event => {
    event.preventDefault();
    try {        
        await axios.put(`${apiUrl}/ver1/authenticate/user/${user.userInfo.id}`, users, {
            headers:{
              "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
            }
           })
        Navigate('/profile')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
      {
            user.userInfo? (
                <Container>
                    <Row>
                      <Nav className="me-auto">
                          <div className='box1'>
                              <Link className="me-auto-a" to="/profilesetting">Cài Đặt Tài Khoản</Link>
                          </div>
                          <div className='box2'>
                              <Link className="me-auto-a" to="/postsetting">Bài Đăng Của Bạn</Link>
                          </div>
                      </Nav>
                      <div className='roww'></div>
                    </Row> 
                    <Card className='card1'>
                            <Card.Img className="card-news-image" variant="top" src={user.userInfo.BackgroundImg} />
                            <Card.Img className='userpic' src={user.userInfo.Avatar || "https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"}/>
                            <Card.Body>
                            <Card.Title className='un'>{user.userInfo.UserName}</Card.Title>
                            <Card.Text>
                                <strong>Tên đăng nhập:</strong> {user.userInfo.LoginName}
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    <Card className='card2' onSubmit={handleSubmit}>
                            <Card.Body>
                            <Card.Text>
                                <strong>Tên người dùng: </strong>
                            </Card.Text>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="text"
                                    name="UserName" 
                                    placeholder={user.userInfo.UserName}
                                    onChange={handleChange}>
                                </input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <Card.Text>
                                <strong>Email: </strong>
                            </Card.Text>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="text"
                                    name="Email" 
                                    placeholder={user.userInfo.Email}
                                    onChange={handleChange}>
                                </input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            <Card.Text>
                                <strong>Ảnh đại diện: </strong>
                            </Card.Text>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="text"
                                    name="Avatar" 
                                    placeholder={user.userInfo.Avatar}
                                    onChange={handleChange}>
                                </input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                </span>
                            </div>
                            <Card.Text>
                                <strong>Ảnh bìa: </strong>
                            </Card.Text>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="text"
                                    name="BackgroundImg" 
                                    placeholder={user.userInfo.BackgroundImg}
                                    onChange={handleChange}>
                                </input>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                </span>
                            </div>
                            <Card.Text>
                                <strong>Danh hiệu: </strong>
                            </Card.Text>
                            <div className="submitbutt">
                                <Button size="md" className="button-post">Chỉnh Sửa</Button>
                            </div>

                        </Card.Body>
                    </Card>
                </Container>
            ) : (
                Navigate('/')
            )
        }
    </>
  )
}

export default Profilesetting;