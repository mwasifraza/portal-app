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
        <div className='col-sm-4'>
          
        </div>
        <div className='col-sm-4 py-5 px-4'>
          <h1 className=''>REGISTER</h1>
          <hr />
          <Register />
        </div>
        <div className='col-sm-4 py-5 px-4'>
          <h1 className=''>LOGIN</h1>
          <hr />
          <Login />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home