//
// React-Router-v4 Web
// https://reacttraining.com/react-router/web/guides/philosophy
//
import React from 'react';
import { Link } from 'react-router-dom'
import '../style.css';
import LetsReactImage from "../LetsReact.png"

import DevTools from 'mobx-react-devtools';


class HeaderComponent extends React.Component {
    render() {
        let { children } = this.props
        return (
            <div>
                <h2>Lets React - React Router v4 Mobx</h2>
                <img src={LetsReactImage}
                    alt="lets react "
                    style={{ width: '80%' }} />
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
                {children}
                <DevTools />
            </div>
        )
    }
}

export default HeaderComponent