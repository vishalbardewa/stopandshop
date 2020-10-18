import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { CustomFormInput } from '../custom-form-input'
import { CustomButton } from '../custom-button'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './sign-in.styles.scss'

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)

  const handleChange = (e) => {

    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.email === 'xyz@example.com' && state.password === '123456') {
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: {
          name: 'John Smith',
          email: state.email
        }
      })
      toast.success('Login Successful', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
    else
      toast.error('Oops wrong email/password', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
  }
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {currentUser && <Redirect to='/' />}
      <div className="sign-in">
        <span>Sign In to your account</span>
        <form onSubmit={handleSubmit}>
          <CustomFormInput
            name='email'
            type='text'
            label='Email'
            value={state.email}
            onChange={handleChange}
            required />
          <CustomFormInput
            name='password'
            type='password'
            label='Password'
            value={state.password}
            onChange={handleChange}
            required />

          <CustomButton>Sign In</CustomButton>
        </form>
      </div>
    </>
  )
}

export default SignIn
