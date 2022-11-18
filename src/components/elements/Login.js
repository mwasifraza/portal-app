import React from 'react'

const Login = () => {
  return (
    <>
      <form>
          <div className='px-4 mt-4'>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-user"></i></span>
                  <div className='float-label-text'>
                      <input type="text" name="username" id='username' className="form-control" autoComplete='off' aria-label="Username" aria-describedby="basic-addon1" required />
                      <label for="username">Username</label>
                  </div>
              </div>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-key"></i></span>
                  <div className='float-label-text'>
                      <input type="password" name="password" id='password' className="form-control" aria-label="Password" aria-describedby="basic-addon1" required/>
                      <label for="password">Password</label>
                  </div>
              </div>
              <div className='d-grid'>
                  <input type="submit" name="login" value="Login" id='Login' className='btn btn-warning rounded-0' />
              </div>
          </div>
      </form>
    </>
  )
}

export default Login