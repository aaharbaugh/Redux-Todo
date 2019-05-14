import { ADD_TODO } from '../actions/actions';

const initialState = {
    todos: [
        {
            value: 'This is the first Todo',
            completed: true,
        },
        {
            value: 'This is the second Todo',
            completed: false,
        },
    ]
};

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, 
                    {
                        value: action.payload,
                        completed: false
                    }]
            }
        default:
            return state;
    }
}

export default reducer;