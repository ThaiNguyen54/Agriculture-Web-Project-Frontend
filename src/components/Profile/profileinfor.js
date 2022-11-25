import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import "./profile.css"
import Card from 'react-bootstrap/Card';
import bg from '../../images/news-2.jpg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profileinfor() {
    const user = useSelector((state) => state.user);
    const Navigate = useNavigate()
    console.log(user)
  return (
    <>

        {
            user.userInfo? (
                <Container>
                    <Row>
                        <div className='content-news-first'>
                            <h3 className='title'>YOUR PROFILE</h3>
                        </div>
                    </Row>
                    <Card className='card1'>
                            <Card.Img className="card-news-image" variant="top" src={user.userInfo.BackgroundImg} />
                            <Card.Img className='userpic' src={user.userInfo.Avatar || "https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"}/>
                            <Card.Body>
                            <Card.Title className='un'>{user.userInfo.UserName}</Card.Title>
                            </Card.Body>
                    </Card>
                    <Card className='card2'>
                            <Card.Body>
                            <Card.Text>
                                Email: {user.userInfo.Email}
                            </Card.Text>
                            <Card.Text>
                                Created date: {user.userInfo.RegisterDate}
                            </Card.Text>
                            <Card.Text>
                                Badge: 
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