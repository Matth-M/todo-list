import './main.scss';
import {Todo} from './todo'
import { TodoList } from './todoList';

function createTodoComponent(item: Todo): Element {
	const todo = document.createElement('div');
	todo.classList.add('todo');

	const todoPriority = document.createElement('p');
	todoPriority.textContent = item.getPriority().toString();
	todo.appendChild(todoPriority);

	const todoTitle = document.createElement('h2');
	todoTitle.textContent = item.getTitle();
	todo.appendChild(todoTitle);

	const todoDueDate = document.createElement('p');
	todoDueDate.textContent = item.getDueDate();
	todo.appendChild(todoDueDate);

	const todoDescription = document.createElement('p');
	todoDescription.textContent = item.getDescription();
	todo.appendChild(todoDescription);

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = "DELETE";
	todo.appendChild(deleteBtn);

	return todo;
}

function createListComponent(list: TodoList): Element {
	const listComponent = document.createElement('div');

	list.getList().forEach((todo: Todo) => {
		listComponent.appendChild(createTodoComponent(todo));
	});

	return listComponent;
}

function createHeaderComponent(): Element {
	const element = document.createElement('header');

	const appTitle = document.createElement('h1');
	appTitle.textContent = "TodoList";
	element.appendChild(appTitle);

	return element;
}

export function displayPageStructure(list: TodoList): void {
	const root = document.querySelector('.root');
	root.appendChild(createHeaderComponent());
	root.appendChild(createListComponent(list))
}
