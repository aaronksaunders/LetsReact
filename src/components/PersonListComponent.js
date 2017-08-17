import React from 'react';
import PersonComponent from './PersonComponent'


const PersonListComponent = ({ data, deleteItem, persons }) => {

  return (
    <div>
      {persons && persons.map((person, index) => {
        return (
          <PersonComponent person={person}
            deleteItem={() => deleteItem(person)}
            key={person + person.id} />
        )
      })}
    </div>
  )
}

export default PersonListComponent