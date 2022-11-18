import React from 'react'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-bg">
        <div className="container">
            <a className="navbar-brand" href="#">STUDENT PORTAL</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header