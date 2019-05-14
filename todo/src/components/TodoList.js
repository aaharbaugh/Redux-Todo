import React from 'react';
import {connect} from 'react-redux';

import { addTodo } from '../actions/actions';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value})
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    }

    render(){
        return (
            <React.Fragment>
                <div className="todo-list">
                    {this.props.todos &&
                    this.props.todos.map(todo => (
                        <h2> {todo.value}, completed: {todo.completed ? 'yes' : 'no'}</h2>
                    ))}
                </div>
                <input 
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeHolder="Add a new Todo"
                />
                <button onClick={this.addTodo}>Add a Todo</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

export default connect(
    mapStateToProps,
    { addTodo }
)(TodoList);