import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Link } from 'react-router-dom'
import { FormRow, Logo } from '../components'

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="example@gmail.com"/>
        <FormRow type="password" name="password" defaultValue="password"/>
        <button type='submit' className='btn btn-block'>
          Sumbit
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'> Register</Link>
          `
        </p>
      </form>
    </Wrapper>
  )
}

export default Login