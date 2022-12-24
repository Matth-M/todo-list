import './main.scss';
import {Todo} from './todo'
import { TodoList } from './todoList';
import { deleteBtnHandler, addButtonHandler, listLinkBtnHandler } from './events'
import { listOfList } from '.';

function createTodoComponent(item: Todo, index: number): Element {
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
	deleteBtn.classList.add('delete')
	deleteBtn.setAttribute('index', index.toString());
	todo.appendChild(deleteBtn);

	return todo;
}

function createListComponent(list: TodoList): Element {
	const listComponent = document.createElement('div');
	listComponent.classList.add('listContainer');

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

function navComponent(lists: TodoList[]): Element {
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	lists.forEach((list) => {
		// Links to display the selected list
		const li = document.createElement('li');
		const linkToList = document.createElement('a');
		linkToList.href = '#';
		linkToList.textContent = list.getTag();
		li.appendChild(linkToList);
		ul.appendChild(li);
	});

	nav.appendChild(ul);

	return nav;
}

// Form receiving the inforùation to create a new todo
function createAddTodoComponent(): Element {
	// Component
	const component = document.createElement('div');
	component.classList.add('addInputContainer');
	component.id = 'addInputContainer';

	// Input container
	const inputsContainer = document.createElement('form');

	// Title
	const titleDiv = createInputElement('titleInput', 'Title', 'text');
	inputsContainer.appendChild(titleDiv);

	// Description
	const descriptionDiv = createInputElement('descriptionInput', 'Description', 'text');
	inputsContainer.appendChild(descriptionDiv);

	// Due Date
	const dueDateDiv = createInputElement('dueDateInput', 'Due Date', 'text');
	inputsContainer.appendChild(dueDateDiv);

	// Priority
	const priorityDiv = createInputElement('priorityInput', 'Priority', 'number');
	inputsContainer.appendChild(priorityDiv);

	// Add the input container
	component.appendChild(inputsContainer);

	// Create the add button
	const addBtn = document.createElement('button');
	addBtn.classList.add('add');
	addBtn.textContent = 'ADD';
	addBtn.id = 'addTodoBtn'
	component.appendChild(addBtn);

	return component;
}

// Used to create all the inputs in the form to add a todo item
function createInputElement(inputId: string, labelContent: string, type: string) {
	const inputContainer = document.createElement('div');

	const input = document.createElement('input');
	input.type = type;
	input.id = inputId;

	const label = document.createElement('label');
	label.setAttribute('for', inputId);
	label.textContent = labelContent;

	inputContainer.appendChild(label);
	inputContainer.appendChild(input);

	return inputContainer;
}

export function displayApp(list: TodoList): void {
	const root = document.querySelector('.root');
	while(root.hasChildNodes()){
		root.removeChild(root.firstChild);
	}

	root.appendChild(createHeaderComponent());

	// Get all the todoList in the form of an array
	// so we can call navComponent() with it
	let allTodoLists: TodoList[] = [];
	for(let key in listOfList) {
		if(listOfList.hasOwnProperty(key)) {
			allTodoLists.push(listOfList[key]);
		}
	}
	root.appendChild(navComponent(allTodoLists));

	const main = document.createElement('main');
	main.appendChild(createAddTodoComponent());
	main.appendChild(createListComponent(list))
	root.appendChild(main);

	deleteBtnHandler(list);
	addButtonHandler(list);
	listLinkBtnHandler();
}
