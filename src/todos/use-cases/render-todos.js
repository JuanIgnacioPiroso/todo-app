import { createTodoHTML } from "./";
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

let element;

export const renderTodos = (elementId, todos = []) => {

    if(!element) element = document.querySelector(elementId);

    if(!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = "";

    todos.forEach(todo => {
        element.append(createTodoHTML(todo))
    });
}