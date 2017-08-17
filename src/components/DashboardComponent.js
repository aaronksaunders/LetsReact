//
// React-Router-v4 Web
// https://reacttraining.com/react-router/web/guides/philosophy
//

import React, { Component } from 'react';
import '../style.css';

import { observer, inject } from 'mobx-react';
import PersonListComponent from '../components/PersonListComponent'


class Dashboard extends Component {
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

        let { inputName } = this.state

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
}

export default inject('personStore')(observer(Dashboard))