import React, { Component } from 'react';
import { getPerson } from '../reducers/people';
import { connect } from 'react-redux'


class User extends Component {

    componentDidMount() {
        let { match, getPerson } = this.props
        getPerson({ id: match.params.id })
    }

    render() {
        let { person } = this.props
        return person ? (<div>
            <h3>User</h3>
            <h4>Info: { `${person.id} - ${person.name}`}</h4>
        </div>) : null
    }
}

export default connect(
    (state) => state,
    { getPerson }
)(User)