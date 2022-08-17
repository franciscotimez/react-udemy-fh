
export const todoReducer = ( initialState =[], action = {}) => {

    switch (action.type) {
        case '[TODO] Add':
            return [...initialState, action.payload]

        default:
            return initialState;
    }
};
