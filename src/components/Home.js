import React from 'react'
import Header from './elements/Header'
import Login from './elements/Login'
import Register from './elements/Register'

const Home = () => {
  return (
    <>
    <Header />
    <div className="container">
      <div className='row'>
        <div className='col-sm-4 mx-auto'>

          <div className='my-5 mx-4 form-bg-glass'>
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-tab-pane" type="button" role="tab" aria-controls="login-tab-pane" aria-selected="true">Login</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup-tab-pane" type="button" role="tab" aria-controls="signup-tab-pane" aria-selected="false">Register</button>
              </li>
            </ul>
            <div className="tab-content py-4" id="myTabContent">
              <div className="tab-pane px-2 fade show active" id="login-tab-pane" role="tabpanel" aria-labelledby="login-tab" tabindex="0">
                <h3 className='ms-4 mb-0'>Log into account.</h3>
                <hr />
                <Login />
              </div>
              <div className="tab-pane px-2 fade" id="signup-tab-pane" role="tabpanel" aria-labelledby="signup-tab" tabindex="0">
                <h3 className='ms-4 mb-0'>Create an account.</h3>
                <hr />
                <Register />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home