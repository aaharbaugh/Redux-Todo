import React from 'react';
import {connect} from 'react-redux';

import { addTodo, toggleTodo, deleteTodo } from '../actions/actions';

class TodoList extends React.Component {
    state = {
        id: '',
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value})
    }

    addTodo = e => {
        e.preventDefault();
        let newTodo = {
            ...this.state
        }
        this.props.addTodo(newTodo);
        this.setState(prevState => {
            return { id: prevState.id + 1, newTodo: ''}
        })
    }

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    deleteTodo = id => {
        this.props.deleteTodo(id);
    }

    render(){
        return (
            <React.Fragment>
                <div className="todo-list">
                    {this.props.todos &&
                    this.props.todos.map(todo => (
                        <h2 onClick={() => this.toggleTodo(todo.id)} key={todo.id}> {todo.value}, 
                        completed: {todo.completed ? 'yes' : 'no'}
                        {todo.completed ? <button onClick={() => this.deleteTodo(todo.id)}>delete</button> : null}</h2>
                    ))}
                </div>
                <input 
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder="Add a new Todo"
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
    { addTodo, toggleTodo, deleteTodo }
)(TodoList);