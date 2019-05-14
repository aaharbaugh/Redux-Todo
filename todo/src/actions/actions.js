export const ADD_TODO = 'ADD_TODO';
export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = todoId => {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
};

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = todoId => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
};