import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
function NewsNfeed(){
    return(
        <Container>
            <Row>
                <div className='content-news-first'>
                    <h3>Nông nghiệp Việt Nam</h3>
                </div>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src="https://agriviet.com/attachments/1644315765247-png.66120/" />
                        <Card.Body>
                        <Card.Title>NUÔI DƯỠNG RỪNG</Card.Title>
                        <Card.Text  >
                        Rừng phục hồi tự nhiên trên đất trống , đồi trọc và nương rẫy sau 8 – 12 năm sẽ đến kỳ khai thác chính nhăm mục đích kinh doanh gỗ lớn.
                        Rừng nghèo do khai thác không hợp lý ,sau thời gian 8 – 12 nămsẽ không đũ tiêu chuẩn rừng khai thác nhưng còn khả năng xúc tiến tái sinh tự nhiên.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src="https://agriviet.com/attachments/khoai-lang-gnm-jpg.63523/" />
                        <Card.Body>
                        <Card.Title>Kỹ thuật trồng cây khoai lang</Card.Title>
                        <Card.Text>
                            Là một loại nông sản phổ biết trong nông nghiệp Việt Nam có vị ngọt tự nhiên thuộc họ rau muống (không liên quan đến khoai tây), khoai lang là một loại cây trồng rất cần thiết để phát triển miễn là bạn có nắng và đất ấm; đây là một loại cây nhiệt đới. Khoai lang chịu hạn, chịu nóng, ít sâu bệnh. Mặc dù theo truyền thống là cây trồng ở phương Nam, ngày nay có nhiều loại khoai lang ngắn ngày sẽ phát triển ở miền Bắc.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <div className='content-news-second'>
                    <h3>Chăm sóc cây</h3>
                </div>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/5FS1QPTCG7llfmgYGarYz1/b1e1ebea17b31c6e7da361d83ce68109/bG9nby0zNTkyMzU2NTgwNTczMjE2Mjk1MzgxMjE3MDQ4ODY5MTE2NjQ5MTQ0MzJvLTE1ODk0NDQxNzc5NjUxNzQ1MDY3MjM5LmpwZw/960w-640h/tr%E1%BB%93ng-rau-tr%C3%AAn-s%C3%A2n-th%C6%B0%E1%BB%A3ng.jpg" />
                        <Card.Body>
                        <Card.Title>TRỒNG RAU XANH TRONG ĐIỀU KIỆN NHÀ PHỐ</Card.Title>
                        <Card.Text>
                            Đặc trưng của chương trình “Nông nghiệp hữu cơ nhỏ” là chúng ta không canh tác trên đất thật, toàn bộ rau xanh đều được trồng bằng giá thể hữu cơ đã qua xử lí với ưu đỉêm khô nhẹ, dễ thấm nước, giữ ẩm tốt, đã được phối trộn dinh dưỡng, thân thiện với môi trường…
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg="6">
                    <Card>
                        <Card.Img className="card-news-image" variant="top" src="https://t.ex-cdn.com/nongnghiep.vn/resize/560x315/files/giangnt/2020/09/10/2006-ot-1023_20200910_957-105834.jpeg" />
                        <Card.Body>
                        <Card.Title>Tìm hiểu nguyên nhân gây bệnh héo xanh trên cây ớt</Card.Title>
                        <Card.Text>
                        Cây ớt bị héo và rụng lá là do vi khuẩn Pseudomonas solanacearum xâm nhập gây ra. Vi khuẩn tấn công vào phần gốc cây làm mạch dẫn của cây bị ngắt, chính vì vậy quá trình vận chuyển nước và chất dinh dưỡng của cây bị ngăn cản làm cho cây bị héo rũ khi lá vẫn còn xanh.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default NewsNfeed;