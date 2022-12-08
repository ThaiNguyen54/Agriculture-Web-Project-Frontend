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
import { useDispatch } from 'react-redux';
import { apiUrl } from '../../Constants/constants';
import { useNotification } from "use-toast-notification";
import { Form } from "react-bootstrap";
import { getUserInfo } from '../features/user/userAction';

function Profilesetting() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const Navigate = useNavigate()
    const notification = useNotification();
    const [update, setUpdate] = useState(null)

    const [avatarValue, setAvatar]  = useState(null);
    const [backgroundValue, setBackgroundValue] = useState(null);

    const handleUpdate = (e) => {
        const value = e.target.value;
        setUpdate({...update, [e.target.name]: value})
    }
    
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setAvatar(reader.result);
        };
    }

    const handleChangeBackground = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setBackgroundValue(reader.result);
        };
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.put(`${apiUrl}/ver1/authenticate/user/${user.userInfo.id}`, {
            ...update,
            Avatar: avatarValue,
            BackgroundImg: backgroundValue
        }, {
            headers:{
                "access_token":  user.userInfo.token
            }
        })
    
    if(response.data){
        try {
            dispatch(getUserInfo({UserID: user.userInfo._id}))
            Navigate('/')
            notification.show({
                message: 'Cập nhật thành công.', 
                title: 'Delivery Status',
                variant: 'success'
            })
            setTimeout(() => {
                window.location.reload();
            }, 2000)
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
                              <Link className="me-auto-a" to={`/profilesetting/${user.userInfo.id}`}>Cài Đặt Tài Khoản</Link>
                          </div>
                          <div className='box2'>
                              <Link className="me-auto-a" to={`/postsetting/${user.userInfo.id}`}>Bài Đăng Của Bạn</Link>
                          </div>
                      </Nav>
                      <div className='roww'></div>
                    </Row>
                    <Card className='card1'>
                            <Card.Img className="card-news-image" variant="top" src={user.userInfo.BackgroundImg} />
                            <Card.Img className='userpic' src={user.userInfo.Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"}/>
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
                                    onChange={handleUpdate}>
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
                                    onChange={handleUpdate}>
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
                                <input className="input100  p-t-10" 
                                    type="file"
                                    name="Avatar" 
                                    placeholder={user.userInfo.Avatar}
                                    onChange={handleChangeAvatar}>
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
                                <input className="input100 p-t-10" 
                                    type="file"
                                    name="BackgroundImg" 
                                    placeholder={user.userInfo.BackgroundImg}
                                    onChange={handleChangeBackground}>
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
