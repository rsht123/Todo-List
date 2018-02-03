import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo => {
            return <Todo 
                key={todo.id} 
                onClick={() => onTodoClick(todo.id) } 
                {...todo}/>
        })}
    </ul>
)

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             completed: PropTypes.bool.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     onTodoClick: PropTypes.func.isRequired
// }

export default TodoList;