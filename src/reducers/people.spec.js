import peopleStore from './people'

test('add a person', () => {

    const initialState = { persons: [] };
    const expectedState = { persons: [{ id: 1, name: 'aaron' }] };
    const action = {
        type: 'ADD_PERSON', payload: { id: 1, name: 'aaron' }
    };

    const result = peopleStore(initialState, action)
    expect(result).toEqual(expectedState)

})



test('remove a person', () => {

    const initialState = {
        persons: [
            { id: 1, name: 'aaron' },
            { id: 2, name: 'andrea' }
        ]
    };
    const expectedState = { persons: [{ id: 1, name: 'aaron' }] };
    const action = {
        type: 'REMOVE_PERSON', payload: { id: 2, name: 'andrea' }
    };

    const result = peopleStore(initialState, action)
    expect(result).toEqual(expectedState)

})



test('get a person id is number', () => {

    const initialState = {
        persons: [
            { id: 1, name: 'aaron' },
            { id: 2, name: 'andrea' }
        ]
    };
    const expectedState = {
        ...initialState,
        person: [{ id: 1, name: 'aaron' }]
    };
    const action = {
        type: 'GET_PERSON', payload: { id: 1 }
    };

    const result = peopleStore(initialState, action)
    expect(result).toEqual(expectedState)

})


test('get a person id is string', () => {
    
        const initialState = {
            persons: [
                { id: 1, name: 'aaron' },
                { id: 2, name: 'andrea' }
            ]
        };
        const expectedState = {
            ...initialState,
            person: [{ id: 1, name: 'aaron' }]
        };
        const action = {
            type: 'GET_PERSON', payload: { id: "1" }
        };
    
        const result = peopleStore(initialState, action)
        expect(result).toEqual(expectedState)
    
    })