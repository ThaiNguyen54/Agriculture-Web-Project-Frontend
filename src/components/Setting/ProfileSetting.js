import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../styles/profile.css"
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
import { useNotification } from "use-toast-notification";
import { Form } from "react-bootstrap";

function Profilesetting() {
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate()
  const notification = useNotification();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState("")
  const [bgImg, setBgImg] = useState("")
  
  const handleUserName = (e) => {
    setUsername(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleAvatar = (e) => {
    setAvatar(e.target.value)
  }
  const handleBgImg = (e) => {
    setBgImg(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.put(`${apiUrl}/ver1/authenticate/user/${user.userInfo.id}`, {
        UserName: username,
        Email: email,
        Avatar: avatar,
        BackgroundImg: bgImg,
        access_token: user.userInfo.token,
    })

    if(response){
        try {
            notification.show({
                message: 'Cập nhật thành công', 
                title: 'Delivery Status',
                variant: 'success'
            })
            Navigate('/')
        } catch(e){
            notification.show({
                message: 'Cập nhật thất bại', 
                title: 'Delivery Status',
                variant: 'error'
            })
            }
        }else{
            Navigate('/')
        }
    }

  return (
    <>
      {
            user.userInfo? (
                <Container >
                
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
                    
                    <Card className='card2' >
                        <Form onSubmit={handleSubmit}>

                        <Card.Body>
                            <Card.Text>
                                <strong>Tên người dùng: </strong>
                            </Card.Text>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" 
                                    type="text"
                                    name="UserName" 
                                    placeholder={user.userInfo.UserName}
                                    onChange={handleUserName}>
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
                                    onChange={handleEmail}>
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
                                    onChange={handleAvatar}>
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
                                    onChange={handleBgImg}>
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
                                <Button size="md" className="button-post" type="submit">Cập nhật</Button>
                            </div>
                            </Card.Body>
                        </Form>
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