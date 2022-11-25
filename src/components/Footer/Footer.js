import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from "../../images/location.png";
import {  MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn } from 'mdb-react-ui-kit';

function FooterPage(){
    return(
        <MDBFooter className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom color-footer'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Hãy kết nối với chúng tôi thông qua những nền tảng sau:</span>
                </div>

                <section className='mb-4'>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#55acee' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon icon='twitter' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#dd4b39' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon icon='google' />
                    </MDBBtn>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#ac2bac' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon icon='instagram' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon icon='linkedin' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#333333' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon icon='github' />
                    </MDBBtn>
                </section>
            </section>
            <section className="color-footer">
                <MDBContainer className='text-center text-md-start mt-5 m-b-50'>
                <MDBRow className='mt-3'>
                    <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                        <MDBIcon color='secondary' icon='gem' className='me-3' />
                        AGRIT
                    </h6>
                    <p className="footer">
                        Đây là dự án phát triển web dành cho bà con nông dân
                    </p>
                    </MDBCol>

                    <MDBCol md='5' lg='5' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>THÀNH VIÊN</h6>
                    <div className="d-flex">
                        <div className="m-r-20">
                            <p>
                                <a href='#!' className='text-reset text-decoration-none footer'>
                                Tín
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset text-decoration-none footer'>
                                Thái
                                </a>
                            </p>
                        </div>
                        <div>
                            <p>
                                <a href='#!' className='text-reset text-decoration-none footer'>
                                Thanh
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset text-decoration-none footer'>
                                Trọng
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset text-decoration-none footer'>
                                Trang
                                </a>
                            </p>
                        </div>
                    </div>
                    </MDBCol>

                    <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Địa chỉ</h6>
                    <p className="footer">
                        <MDBIcon color='secondary' icon='home' className='me-2' />
                        Trường Đại học Công Nghệ Thông Tin - Đại học quốc gia thành phố Hồ Chí Minh
                    </p>
                    <p className="footer">
                        <MDBIcon color='secondary' icon='envelope' className='me-3' />
                        info@example.com
                    </p>
                    <p className="footer">
                        <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                    </p>
                    <p className="footer">
                        <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                    </p>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: '#8EC3B0' }}>
                © 2021 Copyright
            </div>
        </MDBFooter>
    );
}

export default FooterPage;
