import v4 from 'uuid/v4';

export const addTodo = (input) => ({
    type: "ADD_TODO",
    id: v4(),
    text: input.value
})

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
})