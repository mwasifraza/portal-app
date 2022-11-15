import React from 'react'

const Login = () => {
  return (
    <>
        <form>
            <div className='px-4'>
              <div className='form-floating mb-3'>
                <input type="text" name="username" id='username' className='form-control' placeholder='Username' />
                <label for="username">Username</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="text" name="password" id='password' className='form-control' placeholder='Password' />
                <label for="password">Password</label>
              </div>
              <div className='d-grid'>
                <input type="submit" name="login" value="Login" id='Login' className='btn btn-warning' />
              </div>
            </div>
        </form>
    </>
  )
}

export default Login