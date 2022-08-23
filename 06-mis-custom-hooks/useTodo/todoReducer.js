
export const todoReducer = (state = [], action = {}) => {

    switch (action.type) {
        case '[TODO] Add':
            return [...state, action.payload];

        case '[TODO] Delete':
            return state.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return state;
    }
};
