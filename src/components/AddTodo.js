import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input type='text' ref={node => {input = node}} placeholder="Add Todo" />
            <button onClick={() => {
                dispatch(addTodo(input))
                input.value = "";
            }}>
                    Add Todo
                </button>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;