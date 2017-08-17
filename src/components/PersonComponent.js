import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//@observer
class PersonComponent extends React.Component {
  render() {
    let {person, deleteItem, index, match} = this.props
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8
      }}>
        <div style={{ flex: 1 }}>
          <Link
            to={`/dashboard/${index}`}
            style={{ textDecoration: 'none' }}>
            {person.name}
          </Link>
        </div>
        <button
          style={{ padding: 5 }}
          onClick={deleteItem}>delete</button>
      </div>
    )
  }
}

export default PersonComponent
