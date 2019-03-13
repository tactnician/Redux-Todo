import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/index';
import Todo from './components/Todo'

const store = createStore(reducer)

const App = () => {
    return(
        <Todo />
    )
}

const rootElement =  document.getElementById('root');
ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    rootElement    
);


