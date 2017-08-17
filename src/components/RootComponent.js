//
// React-Router-v4 Web
// https://reacttraining.com/react-router/web/guides/philosophy
//

import React  from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../style.css';

import UserComponent  from '../components/UserComponent'
import DashboardComponent  from '../components/DashboardComponent'
import HeaderComponent  from '../components/HeaderComponent'


/**
 * this class holds ther react-router information 
 */
class RootComponent extends React.Component {
  render() {
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
}

export default RootComponent