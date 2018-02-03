import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from '../container.js/VisibleTodoList';
import Footer from './Footer';
import { store } from "../app";


const TodoApp = ({ match }) => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <button onClick={() => {console.log(store.getState())}}>Check</button>
    </div>
)

export default TodoApp;