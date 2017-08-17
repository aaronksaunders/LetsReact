//
// React-Router-v4 Web
// https://reacttraining.com/react-router/web/guides/philosophy
//

import React  from 'react';
import { render } from 'react-dom'
import './style.css';

import { Provider } from 'mobx-react';
import PersonStore from './personStore';
import RootComponent  from './components/RootComponent'


// create the appState using the person store
const appState = new PersonStore();


// render everything
render(
  <Provider personStore={appState}>
    <RootComponent />
  </Provider >,
  document.getElementById('root')
);
