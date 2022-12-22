import './main.scss';
import {Todo} from './todo'
import { TodoList } from './todoList';
import { addDeleteBtnHandler } from './events'

function createTodoComponent(item: Todo, index: number): Element {
	const todo = document.createElement('div');
	todo.classList.add('todo');
	todo.setAttribute('index', index.toString());

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
	deleteBtn.classList.add('delete')
	todo.appendChild(deleteBtn);

	return todo;
}

function createListComponent(list: TodoList): Element {
	const listComponent = document.createElement('div');

	list.getList().forEach((todo: Todo, index) => {
		listComponent.appendChild(createTodoComponent(todo, index));
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

export function displayApp(list: TodoList): void {
	const root = document.querySelector('.root');
	while(root.hasChildNodes()){
		root.removeChild(root.firstChild);
	}
	root.appendChild(createHeaderComponent());
	root.appendChild(createListComponent(list))
	addDeleteBtnHandler(list);
}
