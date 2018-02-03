import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path='/:filter?' component={TodoApp} />
        </Router>
    </Provider>
)

export default Root;