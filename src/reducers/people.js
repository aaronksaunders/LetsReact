
const initState = {
    persons: [{ name: 'aaron', id: 1 }],
}

export const addPerson = (payload) => { return { type: 'ADD_PERSON', payload } }
export const deletePerson = (payload) => { return { type: 'REMOVE_PERSON', payload } }
export const getPerson = (payload) => { return { type: 'GET_PERSON', payload } }


export default (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case 'GET_PERSON':

            let result = state.persons.filter((p) => (p.id + "") === action.payload.id)

            return {
                ...state,
                person: result.length ? result[0] : null
            }
        case 'ADD_PERSON':
            let p = action.payload;
            p['id'] = p['id'] || new Date().getTime()
            return {
                ...state,
                persons: state.persons.concat(p)
            }
        case 'REMOVE_PERSON':
            return {
                ...state,
                persons: state.persons.filter((p) => p.id !== action.payload.id)
            }
        default:
            return state
    }
}