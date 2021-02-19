import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// destruct props in here
const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

// check correct data type for props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icons: PropTypes.string.isRequired,
}

export default Navbar
