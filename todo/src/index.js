import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';

import rootReducer from './reducers/reducer';

const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
            <TodoList/>
        </div>
    );
}

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    rootElement
    );
