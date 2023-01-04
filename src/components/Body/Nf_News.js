import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function NewsNfeed(){
    const [searchContent, setSearchContent] = useState('');
    const {posts} = useSelector((state) => state.post)

    return(
        <Container className="search-home-page-container">
            <Row>
                <Col lg="12" className="title-homepage">
                    <h1>TÌM KIẾM BÀI VIẾT</h1>
                </Col>
                <Col lg="12" className="d-flex justify-content-center search-home-page">
                    <input onChange={(e) => setSearchContent(e.target.value)}></input>
                    <Button><i className="fa fa-search" aria-hidden="true"></i></Button>
                </Col>
                <Col lg="12" className='d-flex justify-content-center search-home-page-key'>
                    <p>Từ khóa phổ biến: </p>
                    <Link>Chăn nuôi</Link>
                    <Link>Trồng trọt</Link>
                    <Link>Mua bán</Link>
                </Col>
                <Col className="search-home-page-result">
                    {
                        posts.filter((item) => {
                            if(searchContent === ''){
                                return null
                            }else if(item.Title.toLowerCase().includes(searchContent.toLowerCase())){
                                return item
                            }
                        }).map((post, index) => {
                            if(index < 7){
                                return <Link to={`/post/${post._id}`} className="box-search-home-key-1">
                                            <div className="box-search-home-key" key={index}>
                                                <p>{post.Title}</p>
                                            </div>
                                        </Link>
                            }
                        }
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}


export default NewsNfeed;
