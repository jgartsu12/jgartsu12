import React from "react";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className='navbar-wrapper'>
            <div className='nav-link-wrapper'>
                <NavLink exact to='/' activeClassName='nav-link-active'>
                    Home
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/about-us' activeClassName='nav-link-active'>
                    About Us
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/soups' activeClassName='nav-link-active'>
                    Soups
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/breakfast' activeClassName='nav-link-active'>
                    Breakfast
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/Lunch' activeClassName='nav-link-active'>
                    Lunch
                </NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/orderOnline' activeClassName='nav-link-active'>
                    OrderOnline
                </NavLink>
            </div> 
        </div>
    );
}

export default withRouter(Navbar);
 