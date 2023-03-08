import { createTodoHTML } from "./";
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */



export const renderTodos = (elementId, todos = []) => {

    const elemet = document.querySelector(elementId);

    todos.forEach(todo => {
        elemet.append(createTodoHTML(todo))
    });
}