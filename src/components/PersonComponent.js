import React from 'react';
import { Link } from 'react-router-dom'


const PersonComponent = ({ person, deleteItem, match }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 8
    }}>
      <div style={{ flex: 1 }}>
        <Link
          to={`/dashboard/${person.id}`}
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

export default PersonComponent
