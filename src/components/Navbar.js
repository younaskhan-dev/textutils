// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid ">
          <Link className="navbar-brand  " to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">{props.about}</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-wrap justify-content-end align-items-center gap-2">
            <div
              className="bg-success rounded-circle"
              onClick={() => props.togglemode('success')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>

            <div
              className="bg-danger rounded-circle"
              onClick={() => props.togglemode('danger')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>

            <div
              className="bg-warning rounded-circle"
              onClick={() => props.togglemode('warning')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>

            <div
              className="bg-secondary rounded-circle"
              onClick={() => props.togglemode('secondary')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>

            <div
              className="bg-info rounded-circle"
              onClick={() => props.togglemode('info')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>

            <div
              className="bg-dark rounded-circle"
              onClick={() => props.togglemode('dark')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>

            <div
              className="bg-light border rounded-circle"
              onClick={() => props.togglemode('light')}
              style={{ height: '22px', width: '22px', cursor: 'pointer' }}
            ></div>
          </div>

        </div>

      </nav>

    </div>
  )
}


