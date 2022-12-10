import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../styles/profile.css"
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { GetUserId } from '../features/users/allUserSlice';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoadingPage from '../../pages/LoadingPage';
function Profileinfor() {
    const user = useSelector((state) => state.user);
    const Navigate = useNavigate()
    const {userId} = useParams();

    const userProfile = useSelector((state) => GetUserId(state, userId));
    const CreatedDate = new Date(userProfile[0].RegisterDate).toUTCString().substring(0, 17);
    const navigate = useNavigate()
    const TransferAdmin = () => {
        navigate("/loading")
    }
    return (
        <>

            {
                userProfile? (
                    <Container>
                        <Row>
                            <Col className="content-news-first">
                                <div>
                                    <h3 className='title'>THÔNG TIN TÀI KHOẢN</h3>
                                </div>
                            </Col>
                        </Row>
                        {
                            userProfile[0].UserRight ==="ADMIN"?
                            <div className='d-flex justify-content-center'>
                                <Button onClick={TransferAdmin}><i className="fa fa-refresh fa-2x" aria-hidden="true"></i></Button>
                            </div>
                            : <></>
                        }
                        <Row>
                            <Col lg="12">
                                <Card className='card1 w-100'>
                                        <Card.Img className="card-news-image" variant="top" src={userProfile[0].BackgroundImg} />
                                        <Card.Img className='userpic' src={userProfile[0].Avatar || "https://cdn-icons-png.flaticon.com/512/44/44948.png"}/>
                                        <Card.Body>
                                        <Card.Title className='un'>{userProfile[0].UserName}</Card.Title>
                                        </Card.Body>
                                </Card>
                                <Card className='card2 w-100'>
                                        <Card.Body>
                                        
                                        <Card.Text>
                                            <strong>Email:</strong> {userProfile[0].Email}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Ngày tạo:</strong> {CreatedDate}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Danh hiệu:</strong> 
                                        </Card.Text>
                                        </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    Navigate('/')
                )
            }
        </>
    )
    }

export default Profileinfor;