export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CHANGE_COMPLETE_TODO = "CHANGE_COMPLETE_TODO";

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}

export function changeCompleteTodo(todo) {
    return {
        type:CHANGE_COMPLETE_TODO,
        payload: todo,
    }
}


export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}