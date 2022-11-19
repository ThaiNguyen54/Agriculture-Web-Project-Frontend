import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import createPostImg from "../images/reviews.png"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../Constants/constants";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { useNotification } from "use-toast-notification";
import { useNavigate } from "react-router-dom";
function CreatePost(){
    const [radioValue, setRadioValue] = useState('1');
    const [postContent, setPostContent] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const navigate = useNavigate();
    const notification = useNotification();
    const radios = [
      { name: 'Chăn nuôi', value: 'Chăn nuôi' },
      { name: 'Trồng trọt', value: 'Trồng trọt' },
      { name: 'Mua bán', value: 'Mua bán' },
    ];
    
    const user = useSelector((state) => state.user)

    const handleContent = (e) => {
        setPostContent(e.target.value);
    }

    const handleTitle = (e) => {
        setPostTitle(e.target.value);
    }
    
    const submitPost = async(e) => {
        e.preventDefault();
        const response = await axios.post(`${apiUrl}/ver1/authenticate/question`, {
            Title: postTitle,
            QContent: postContent,
            access_token: user.userInfo.token,
            TagName: radioValue
        })

        if(response){
            try {
                notification.show({
                    message: 'Bạn đã đăng thành công', 
                    title: 'Delivery Status',
                    variant: 'success'
                })
                navigate("/")
            } catch(e){
                notification.show({
                    message: 'Đăng bài thất bại', 
                    title: 'Delivery Status',
                    variant: 'error'
                })
            }
        }else{
            navigate("/")
        }
    }

    return(
        <Container>
            <Row>
                <Col lg="12">
                    <Form onSubmit={submitPost}>
                        <div className="create-post-forum">
                            <div className="dis-flex specify-create-post">
                                <img src={createPostImg}></img>
                                <p>Tạo câu hỏi</p>
                            </div>
                            <div className="title-post d-flex">
                                <p>Chủ đề:</p>
                                <textarea className="title-post-text" type="text" placeholder="Chủ đề bạn đang thắc mắc" onChange={handleTitle}></textarea>
                            </div>
                            <div className="input-all-create-post">
                                <textarea className="input-create-post" type="text" placeholder="Bạn đang thắc mắc điều gì" onChange={handleContent}></textarea>
                            </div>
                                <div className="d-flex bottom-createpost-button">
                                    <div className="d-flex button-type-createpost">
                                        <div className="text-type-choosing-button">
                                            <p>Loại chủ đề: </p>
                                        </div>
                                        <ButtonGroup>
                                            {radios.map((radio, idx) => (
                                                <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={'outline-success'}
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                >
                                                {radio.name}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </div>
                                    <div className="div-for-button-post">
                                        <Button size="sm" className="button-post" type="submit">Đăng</Button>
                                    </div>
                                </div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CreatePost;