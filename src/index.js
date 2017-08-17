//
// React-Router-v4 Web
// https://reacttraining.com/react-router/web/guides/philosophy
//

import React, { Component } from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, IndexRoute, Switch } from 'react-router-dom'
import Hello from './Hello';
import './style.css';

import { observer, inject, Provider, autorun, observable } from 'mobx-react';
import DevTools, { configureDevtool } from 'mobx-react-devtools';
import remotedev from 'mobx-remotedev';
import PersonStore  from './personStore';
import PersonListComponent  from './components/PersonListComponent'

let User = inject('personStore')(observer(({match, personStore}) => {
  return (<div>
    <h3>User</h3>
    <h3>ID: {personStore.get(match.params.id).name}</h3>
  </div>)
}))



let Dashboard = inject('personStore')
  (observer(class Dashboard extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: 'React Sample App',
        inputName: ''
      };

    }

    addNewPerson = () => {
      this.props.personStore.add(this.state.inputName)
    }

    deleteItem = (item) => {
      this.props.personStore.remove(item)
    }

    /**
     * by using the "fat arrow" i don't need to do the binding
     * of in the constructor 
     * 
     * this.handleTextChange = this.handleTextChange.bind(this)
     */
    handleTextChange = (_event) => {
      console.log(_event.target.value)
      this.setState({ inputName: _event.target.value })
    }

    render() {

      let {people, inputName, name} = this.state

      return (
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
          <div>
            <div style={{
              display: 'flex',
              paddingBottom: 10,
              flexDirection: 'row'
            }}>
              <input type='text' style={{ flex: 1 }}
                value={inputName}
                onChange={this.handleTextChange} />
              <button
                style={{
                  padding: 5,
                  marginLeft: 10
                }}
                onClick={this.addNewPerson}
                disabled={!inputName}
              > ADD NEW NAME </button>
            </div>
          </div>
          <PersonListComponent
            persons={this.props.personStore.persons}
            deleteItem={this.deleteItem} />
        </div>

      );
    }
  }))



class AppContainer extends React.Component {
  render() {
    let { children} = this.props
    return (
      <div>
        <h2>Lets React - React Router v4</h2>
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

/**
 * this class holds ther react-router information 
 */
class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppContainer />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:id" component={User} />
        </div>
      </BrowserRouter>
    )
  }
}

// create the appState using the person store
const appState = new PersonStore();


// render everything
render(
  <Provider personStore={appState}>
    <Root />
  </Provider >,
  document.getElementById('root')
);
