import todos, * as fromTodos from './todos';
import { combineReducers } from 'redux';

const todoApp = combineReducers({todos});

export default todoApp;

export const getVisibleTodos = (state, filter) => {
    return fromTodos.getVisibleTodos(state.todos, filter)
}