import React from 'react';
import { observer } from 'mobx-react';
import PersonComponent from './PersonComponent'


//@observer
class PersonListComponent extends React.Component {
  render() {
    let { deleteItem, persons} = this.props
    return (
      <div>
        {persons.map((person, index) => {
          return (
            <PersonComponent person={person}
              deleteItem={() => deleteItem(index)}
              index={index}
              key={person + index} />
          )
        })}
      </div>
    )
  }
}

export default  observer(PersonListComponent)