import React from 'react'
import Header from './elements/Header'
import Login from './elements/Login'
import Register from './elements/Register'

const Home = () => {
  return (
    <>
    <div className="container">
      <div className='row align-items-center header px-3'>
        <div className='header-child shadow'>

          <nav className="navbar navbar-expand-lg navbar-bg">
          <div className="container">
              <a className="navbar-brand bold" href="#"><i className="fa-solid fa-graduation-cap fa-lg"></i> STUDENT PORTAL</a>
          </div>
          </nav>

          <div className='row header-body'>
            <div className='col-sm-6 d-flex align-items-center'>
              <div className='mx-4'>
                <h1 className='main-title-heading'>
                  <span>ISST's </span>
                  <span>Learning </span>
                  <span>Management </span> 
                  <span>System </span>
                </h1>
              </div>
            </div>
            <div className='offset-sm-1 col-sm-4 d-flex align-items-center'>
              <div className='mx-4 form-bg-glass w-100'>
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

          <div className='footer d-flex flex-md-row flex-column align-items-center justify-content-between py-1 px-2'>
            <ul className='header-socials d-flex m-0 p-0'>
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-github"></i></a></li>
            </ul>
            <div className='d-flex align-items-center'>
                <h6><i className='far fa-copyright'></i> 2022 | Designed by <a href='#'>Wasif Raza</a></h6>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home