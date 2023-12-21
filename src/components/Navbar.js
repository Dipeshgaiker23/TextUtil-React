import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.tittle}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                        {/* <div className="d-flex">
                            <div className="bg-primary rounded mx-2 curser-pointer" onClick={()=>{props.toggleMode('primary')}} style={{height: '25px', width: '25px'}}></div>
                            <div className="bg-danger rounded mx-2 curser-pointer" onClick={()=>{props.toggleMode('danger')}} style={{height: '25px', width: '25px'}}></div>
                            <div className="bg-success rounded mx-2 curser-pointer" onClick={()=>{props.toggleMode('success')}} style={{height: '25px', width: '25px'}}></div>
                            <div className="bg-warning rounded mx-2 curser-pointer" onClick={()=>{props.toggleMode('warning')}} style={{height: '25px', width: '25px'}}></div>
                        </div> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    tittle: PropTypes.string.isRequired, //if default and not passed prop will throw exception
    about: PropTypes.string.isRequired // defines the datatype of the props
}

Navbar.defaultProps = { // sets the default values for the props if not passed
    tittle: 'Navbar',
    about: 'about'
}