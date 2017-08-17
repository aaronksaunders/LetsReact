import React from 'react';
import { Link } from 'react-router-dom'


const Header = ({ children }) => {
    return (
        <div>
            <h2>Lets React - React Router v4 - Redux</h2>
            <nav style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 10
            }}>
                <div >
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
                </div>
                <div style={{ padding: 5 }}>
                    <Link to="/user" style={{ textDecoration: 'none' }}>User</Link>
                </div>
            </nav>
        </div>
    )
}


export default Header;