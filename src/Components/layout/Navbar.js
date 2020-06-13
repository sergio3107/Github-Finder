import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar =({title}) => {
        return (
            <nav className= 'navbar bg-primary'>
                <h1>
                    {title}
                </h1> 
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps ={
    title:'Github Finder'
};

Navbar.propTypes ={
    title : propTypes.string.isRequired
};

export default Navbar
