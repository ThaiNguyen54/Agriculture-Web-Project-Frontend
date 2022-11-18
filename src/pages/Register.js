import React from 'react'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
            </div>
                <RegisterForm />
        </div>
    </div>
</div>
  )
}

export default Register