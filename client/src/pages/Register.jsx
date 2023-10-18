import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Link } from 'react-router-dom'
import { FormRow, Logo } from '../components'


const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo/>
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='lastName' defaultValue='gray' labelText='last name'/>
        <FormRow type='text' name='location' defaultValue='sambir'/>
        <FormRow type='email' name='email' defaultValue='example@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='password'/>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          Already a member?
          <Link to='/login'> Login</Link>
          `
        </p>
      </form>
    </Wrapper>
  )
}

export default Register