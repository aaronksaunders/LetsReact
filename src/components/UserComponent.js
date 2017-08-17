import React from 'react';
import { observer, inject } from 'mobx-react';

let User = ({ match, personStore }) => {
  return (<div>
    <h3>User</h3>
    <h3>ID: {personStore.get(match.params.id).name}</h3>
  </div>)
}

export default inject('personStore')(observer(User))