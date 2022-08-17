
export const todoReducer = (state = [], action = {}) => {

    switch (action.type) {
        case '[TODO] Add':
            return [...state, action.payload];

        case '[TODO] Delete':
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }
};
