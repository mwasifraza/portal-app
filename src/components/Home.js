import React from 'react'
import Header from './elements/Header'
import Login from './elements/Login'
import Register from './elements/Register'

const Home = () => {
  return (
    <>
    <div className="container p-3">
      <div className='row'>
        <Header />
      </div>

      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'></div>

        <div className='col-sm-4 py-5 px-4'>

          <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-tab-pane" type="button" role="tab" aria-controls="login-tab-pane" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup-tab-pane" type="button" role="tab" aria-controls="signup-tab-pane" aria-selected="false">Register</button>
            </li>
          </ul>

          <div class="tab-content py-4" id="myTabContent">
            <div class="tab-pane fade show active" id="login-tab-pane" role="tabpanel" aria-labelledby="login-tab" tabindex="0">
              <h2 className=''>LOGIN</h2>
              <hr />
              <Login />
            </div>
            <div class="tab-pane fade" id="signup-tab-pane" role="tabpanel" aria-labelledby="signup-tab" tabindex="0">
              <h2 className=''>REGISTER</h2>
              <hr />
              <Register />
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home