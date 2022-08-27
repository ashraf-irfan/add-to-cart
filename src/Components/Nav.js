import React from 'react'
import './Css/nav.css'
import logo from './Images/logo.png';

const Nav = ({setShow, size }) => {
  return (
    <div>
      <header className="navbar animate__animated animate__slideInDown animate__delay-1s">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand d-flex" href="/"><img className="hvr-pop" onClick={() => setShow(true)} src={logo} alt="" width="50px" /> 
              <h2 className="text-primary ms-2 hvr-pop tx" onClick={() => setShow(true)}>Shop</h2></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item hvr-pop">
                  <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link text-white" href="./men/index.html">MEN</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link text-white" href="./women/index.html">WOMEN</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link text-white" href="./accessories/index.html">ACCESORIS</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link text-white" href="./kid/index.html">KID</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link text-white" href="./contact/index.html">CONTACT</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link text-white" href="./account/account.html">SIGN IN</a>
                </li>
                <li className="nav-item hvr-pop">
                  <a className="nav-link" href="/"><i className="fas fa-search text-white"></i></a>
                </li>
                <li className="nav-item hvr-pop jj animate__animated" onClick={() => setShow(false)}>
                  <i className="fab fa-opencart text-white"></i><span className="badge badge-primary animate__animated ">{size}</span>
                </li>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav