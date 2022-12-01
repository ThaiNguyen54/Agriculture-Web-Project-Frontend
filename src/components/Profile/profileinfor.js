import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "../../styles/profile.css"
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profileinfor() {
    const user = useSelector((state) => state.user);
    const Navigate = useNavigate()
    
  return (
    <>

        {
            user.userInfo? (
                <Container>
                    <Row>
                        <div className='content-news-first'>
                            <h3 className='title'>THÔNG TIN TÀI KHOẢN</h3>
                        </div>
                    </Row>
                    <Card className='card1'>
                            <Card.Img className="card-news-image" variant="top" src={user.userInfo.BackgroundImg} />
                            <Card.Img className='userpic' src={user.userInfo.Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"}/>
                            <Card.Body>
                            <Card.Title className='un'>{user.userInfo.UserName}</Card.Title>
                            </Card.Body>
                    </Card>
                    <Card className='card2'>
                            <Card.Body>
                            
                            <Card.Text>
                                <strong>Email:</strong> {user.userInfo.Email}
                            </Card.Text>
                            <Card.Text>
                                <strong>Ngày tạo:</strong> {user.userInfo.RegisterDate}
                            </Card.Text>
                            <Card.Text>
                                <strong>Danh hiệu:</strong> 
                            </Card.Text>
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

export default Profileinfor;