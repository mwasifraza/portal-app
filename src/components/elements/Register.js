import React from 'react'

const Register = () => {
  return (
    <>
        <form>
            <div className='px-4 mt-4'>
              <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-user"></i></span>
                  <div className='float-label-text'>
                      <input type="text" name="fullname" id='fullname' className="form-control" autoComplete='off' aria-label="fullname" aria-describedby="basic-addon1" required />
                      <label for="fullname">Full Name</label>
                  </div>
              </div>
              <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-envelope"></i></span>
                  <div className='float-label-text'>
                      <input type="email" name="email" id='email' className="form-control" autoComplete='off' aria-label="email" aria-describedby="basic-addon1" required />
                      <label for="email">Email</label>
                  </div>
              </div>
              <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-at"></i></span>
                  <div className='float-label-text'>
                      <input type="text" name="username" id='username' className="form-control" autoComplete='off' aria-label="Username" aria-describedby="basic-addon1" required />
                      <label for="username">Username</label>
                  </div>
              </div>
              <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                  <div className='float-label-text'>
                      <input type="password" name="password" id='password' className="form-control" autoComplete='off' aria-label="password" aria-describedby="basic-addon1" required />
                      <label for="password">Password</label>
                  </div>
              </div>
              <div className='mb-4 my-check-btn'>
                <div class="my-check-group me-1">
                    <input class="my-check-input" type="radio" name="gender" id="male" value="male" />
                    <label class="my-check-label" for="male">Male</label>
                </div>
                <div class="my-check-group">
                    <input class="my-check-input" type="radio" name="gender" id="female" value="female" />
                    <label class="my-check-label" for="female">Female</label>
                </div>
              </div>
              <div className='d-grid'>
                <button className='btn my-btn-1 rounded-0' name="signup" id='signup'>Sign Up</button>
              </div>
            </div>
        </form>
    </>
  )
}

export default Register