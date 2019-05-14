import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = {
    todos: [
        {
            id: 11,
            value: 'This is the first Todo',
            completed: true,
        },
        {
            id: 12,
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
                        id: action.payload.id,
                        value: action.payload.newTodo,
                        completed: false
                    }]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
}

export default reducer;