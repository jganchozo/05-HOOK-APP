import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to={'/'}>useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        end
                        className={`nav-link ${(navData) => navData.isActive && 'active'}`}
                        to={'/'}
                    >Home</NavLink>
                    <NavLink 
                        className={`nav-link ${(isActive) => isActive && 'active'}`}
                        to={'/about'}
                    >About</NavLink>
                    <NavLink 
                        className={`nav-link ${(isActive) => isActive && 'active'}`}
                        to={'/login'}
                    >Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
