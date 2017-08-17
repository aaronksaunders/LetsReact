import React, { Component } from 'react';
import { addPerson, deletePerson } from '../reducers/people';
import { connect } from 'react-redux'

import PersonListComponent from './PersonListComponent'

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputName: ''
        };

    }

    addNewPerson = () => {
        this.props.addPerson({ name: this.state.inputName })
        this.setState({
            inputName: ''
        })
    }

    deleteItem = (item) => {
        this.props.deletePerson(item)
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
                    persons={this.props.persons}
                    deleteItem={this.deleteItem} />
            </div>

        );
    }
}
export default connect(
    (state) => state,
    { addPerson, deletePerson }
)(Dashboard)