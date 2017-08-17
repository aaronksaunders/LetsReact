//
// React-Router-v4 Web
// https://reacttraining.com/react-router/web/guides/philosophy
//

import React  from 'react';
import { render } from 'react-dom'

// entry into app
import RootComponent from './components/RootComponent'

// redux
import personStore from './reducers/people';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


// render everything
render(
  <Provider store={createStore(personStore)}>
    <RootComponent />
  </Provider >,
  document.getElementById('root')
);
