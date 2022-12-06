import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import createPostImg from "../../images/reviews.png"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonGroup } from "react-bootstrap";
import axios from "axios";
import React, {useRef} from 'react';
import { apiUrl } from "../../Constants/constants";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { useNotification } from "use-toast-notification";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPostId } from "../features/posts/postSlice";
import { Editor } from '@tinymce/tinymce-react';
import parse from "html-react-parser";
function EditPost(){
    const {postId} = useParams();
    const post = useSelector((state) => getPostId(state, postId))
    const [radioValue, setRadioValue] = useState(post[0].TagName);
    const navigate = useNavigate();
    const notification = useNotification();
    const editorRef = useRef(null);
    const radios = [
      { name: 'Chăn nuôi', value: 'Chăn nuôi' },
      { name: 'Trồng trọt', value: 'Trồng trọt' },
      { name: 'Mua bán', value: 'Mua bán' },
    ];
    const [updateTitle, setUpdateTitle] = useState(post[0].Title)
    const [updateContent, setUpdateContent] = useState(post[0].QContent)

    const user = useSelector((state) => state.user)

    const handleTitle = (e) => {
        setUpdateTitle(e.target.value)
    }

    const handleContent = (e) => {
        setUpdateContent(e.target.value)
    }

    const handleTagName = (e) => {
        setRadioValue(e.currentTarget.value)
    }
    
    const submitPost = async(e) => {
        e.preventDefault();
        const response = await axios.put(`${apiUrl}/ver1/authenticate/questions/${post[0]._id}`, {
            Title: updateTitle,
            QContent: editorRef.current.getContent(),
            access_token: user.userInfo.token,
            TagName: radioValue
        })

        if(response){
            try {
                navigate("/")
                notification.show({
                    message: 'Chỉnh sửa thành công', 
                    title: 'Delivery Status',
                    variant: 'success'
                })
                setTimeout(() => {
                    window.location.reload(false);
                }, 2000)
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
        <>
            {
                user.userInfo? (
                    <Container>
                        <Row>
                            <Col lg="12">
                                <Form onSubmit={submitPost}>
                                    <div className="create-post-forum">
                                        <div className="dis-flex specify-create-post">
                                            <img src={createPostImg}></img>
                                            <p>Chỉnh sửa bài đăng</p>
                                        </div>
                                        <div className="title-post d-flex">
                                            <p>Chủ đề:</p>
                                            <textarea className="title-post-text" name="Title" value={updateTitle} type="text"  onChange={handleTitle}></textarea>
                                        </div>
                                        <div className="input-all-create-post">
                                            <Editor
                                                apiKey="pd19nv7qg8uavs8yk5cdc07dfoizxdm4um00orijqeqcdn5p"
                                                initialValue={post[0].QContent}
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                init={{
                                                height: 500,
                                                menubar: false,
                                                toolbar: 'undo redo | formatselect | ' + 
                                                'bold italic backcolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
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
                                                            onChange={handleTagName}
                                                            >
                                                            {radio.name}
                                                            </ToggleButton>
                                                        ))}
                                                    </ButtonGroup>
                                                </div>
                                                <div className="div-for-button-post">
                                                    <Button size="sm" className="button-post" type="submit">Lưu</Button>
                                                </div>
                                            </div>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    navigate('/')
                )
            }
        </>     
    );
}

export default EditPost;