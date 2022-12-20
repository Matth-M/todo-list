import './main.scss';
import {Todo} from './todo'
import { TodoList } from './todoList';

function createTodoComponent(item: Todo) {
	const todo = document.createElement('div');
	todo.classList.add('todo');

	const todoPriority = document.createElement('p');
	todoPriority.textContent = item.getPriority().toString();
	todo.appendChild(todoPriority);

	const todoTitle = document.createElement('h2');
	todoTitle.textContent = item.getTitle();
	todo.appendChild(todoTitle);

	const todoDescription = document.createElement('p');
	todoDescription.textContent = item.getDescription();
	todo.appendChild(todoDescription);

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = "DELETE";
	todo.appendChild(deleteBtn);

	return todo;
}

export function displayList(list: TodoList) {
	const root = document.querySelector('.root');
	list.getList().forEach((todo: Todo) => {
		root.appendChild(createTodoComponent(todo));
	});
}

export function createHeaderComponent() {
	const element = document.createElement('header');

	const appTitle = document.createElement('h1');
	appTitle.textContent = "TodoList";
	element.appendChild(appTitle);

	return element;
}

export function displayPageStructure() {
	const root = document.querySelector('.root');
	root.appendChild(createHeaderComponent());

}
