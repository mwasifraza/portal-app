import React from 'react'
import Header from './elements/Header'

const Home = () => {
  return (
    <>
    <div className="container p-3">
      <div className='row'>
        <Header />
      </div>

      <div className='row'>
        <div className='col-sm-8'>
          
        </div>
        <div className='col-sm-4 py-5 px-4'>
          <h1 className=''>LOGIN</h1>
          <hr />
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
        </div>
      </div>
    </div>
    </>
  )
}

export default Home