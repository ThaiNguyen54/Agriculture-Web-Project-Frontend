import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "../styles/Admin.css"
const LoadingPage = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/admin")
    }, 1200)
    return (
        <Row>
            <Col lg="12" className='d-flex justify-content-center'>
                <div class="loader"></div>
            </Col>
        </Row>
    )
}

export default LoadingPage