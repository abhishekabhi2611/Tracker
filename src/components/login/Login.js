import { TextField } from '@material-ui/core'
import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className='loginSection'>
        <div className='loginBox'>
          <div className='logintitlesection'>
            <h1 className='logintitle'>Tracker</h1>
          </div>
          <div className='loginBodySection'>
            <form noValidate autoComplete='off' className='loginBody'>
              <TextField
                className='field'
                id='outlined-basic'
                label='Email'
                variant='outlined'
              />
              <TextField
                className='field'
                type='password'
                id='outlined-basic'
                label='Password'
                variant='outlined'
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
