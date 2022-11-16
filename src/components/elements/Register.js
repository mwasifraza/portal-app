import React from 'react'

const Register = () => {
  return (
    <>
        <form>
            <div className='px-4'>
              <div className='form-floating mb-3'>
                <input type="text" name="fullname" id='fullname' className='form-control' placeholder='Full Name' />
                <label for="fullname">Full Name</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="email" name="email" id='email' className='form-control' placeholder='Email' />
                <label for="email">Email</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="text" name="username" id='username' className='form-control' placeholder='Username' />
                <label for="username">Username</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="password" name="password" id='password' className='form-control' placeholder='Password' />
                <label for="password">Password</label>
              </div>
              <div className='mb-3'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="male" />
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="female" />
                    <label class="form-check-label" for="female">Female</label>
                </div>
              </div>
              <div className='d-grid'>
                <input type="submit" name="signup" value="Sign Up" id='signup' className='btn btn-warning' />
              </div>
            </div>
        </form>
    </>
  )
}

export default Register