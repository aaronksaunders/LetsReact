import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../style.css';

import HeaderComponent from './HeaderComponent'
import DashboardComponent from './DashboardComponent'
import UserComponent from './UserComponent'


/**
 * this class holds ther react-router information 
 */
const Root = () => {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponent />
          <Route exact path="/" component={DashboardComponent} />
          <Route exact path="/dashboard" component={DashboardComponent} />
          <Route exact path="/dashboard/:id" component={UserComponent} />
        </div>
      </BrowserRouter>
    )
}

export default Root