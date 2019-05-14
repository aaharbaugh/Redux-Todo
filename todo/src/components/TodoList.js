import React from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };


    render(){
        return (
            <React.Fragment>
                <div className="todo-list">
                    {this.props.todos &&
                    this.props.todos.map(todo => (
                        <h2> {todo.value}, completed: {todo.completed}</h2>
                    ))}
                </div>
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
    {}
)(TodoList);