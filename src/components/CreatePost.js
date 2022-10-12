import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import createPostImg from "../images/reviews.png"
import Button from 'react-bootstrap/Button';
import PostShow from "./ShowPost";


function CreatePost(){
    return(
        <Container>
            <Row>
                <Col lg="12">
                    <div className="create-post-forum">
                        <div className="dis-flex specify-create-post">
                            <img src={createPostImg}></img>
                            <p>Tạo câu hỏi</p>
                        </div>
                        <div className="input-all-create-post">
                            <textarea className="input-create-post" type="text" placeholder="Bạn đang thắc mắc điều gì"></textarea>
                        </div>
                            <div className="d-flex bottom-createpost-button">
                                <div className="d-flex button-type-createpost">
                                    <div className="text-type-choosing-button">
                                        <p>Loại chủ đề: </p>
                                    </div>
                                    <Button size="sm" className="button-choosing-tag">Trồng cây</Button>
                                    <Button size="sm" className="button-choosing-tag">Nuôi và chăm sóc</Button>
                                </div>
                                <div className="div-for-button-post">
                                    <Button size="sm" className="button-post">Đăng</Button>
                                </div>
                            </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <PostShow />
                </Col>
                <Col lg="12">
                    <PostShow />
                </Col>
                <Col lg="12">
                    <PostShow />
                </Col>
            </Row>
        </Container>
    );
}

export default CreatePost;