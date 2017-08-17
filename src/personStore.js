import {  action, extendObservable, useStrict } from 'mobx';
// this allows us to use redux-dev-tools
import remotedev from 'mobx-remotedev';
useStrict(true);


// this allows us to use redux-dev-tools
//@remotedev({})
class PersonStore {
  constructor() {
    extendObservable(this, {

      persons:[],

      get: action(function get(_personIdx) {
        return this.persons[_personIdx];
      }),

      add: action(function add(_person) {
        this.persons.push({ name: _person });
      }),

      remove: action(function remove(_personIdx) {
        this.persons.splice(_personIdx, 1)
      })

    })
  }


 // @computed get personList() {
 //   return this.persons
 // }

  toJS() {
    return this.persons.map(p => p.toJS());
  }
}

export default remotedev(PersonStore);
