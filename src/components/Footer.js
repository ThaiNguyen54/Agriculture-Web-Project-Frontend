import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'




const Footer = () => {

  return (
    <Navbar expand='lg' bg='dark' variant='dark' className='header' >
        <Container>
        <Nav className='font-weight-bolder text-white mr-auto' >
                <a href='https://coreui.io'>Core UI</a>
                <span>© 2022 MSIS207.N12.CTTT</span>
            </Nav>
            <Nav className='font-weight-bolder text-white ms-auto'>
                <span>Powered by </span>
                <a href=''>© Us</a>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Footer