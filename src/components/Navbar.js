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
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">{props.about}</Link>
              </li>
            </ul>
          </div>
          <div className='color-palette bg-success rounded mx-1' onClick={() => { props.togglemode('success') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>
          <div className='color-palette bg-danger rounded' onClick={() => { props.togglemode('danger') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>
          <div className='color-palette bg-warning rounded mx-1' onClick={() => { props.togglemode('warning') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>
          <div className='color-palette bg-secondary rounded' onClick={() => { props.togglemode('secondary') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>
          <div className='color-palette bg-info rounded mx-1' onClick={() => { props.togglemode('info') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>
          <div className='color-palette bg-dark rounded mx-1' onClick={() => { props.togglemode('dark') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>
          <div className='color-palette bg-light rounded mx-1' onClick={() => { props.togglemode('light') }} style={{ height: 20 + 'px', width: 20 + 'px', cursor: 'pointer' }}></div>

        </div>

      </nav>

    </div>
  )
}


