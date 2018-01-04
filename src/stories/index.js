import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import UserComponent from '../components/UserComponent';
import PersonComponent from '../components/PersonComponent'

import { Provider } from 'mobx-react';
import PersonStore from '../personStore';


// create the appState using the person store
const appState = new PersonStore();

appState.add("Aaron")
appState.add("Andrea")



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('UserComponent', module)
  .addDecorator((getStory) => (
    <Provider personStore={appState}>
      {getStory()}
    </Provider>
  ))
  .add('first one', () => {
    const match = {
      params: { id: 0 }
    }
    return <UserComponent match={match} />
  })
  .add('second one', () => {
    const match = {
      params: { id: 0 }
    }
    let params = {
      person : {name:'Aaron'},
      index : 0,
      history : {}
    }
    return <PersonComponent {...params} />
  })