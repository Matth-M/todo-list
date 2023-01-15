import './main.scss';
import { Todo } from './todo'
import { TodoList } from './todoList';

import { deleteBtnHandler, addButtonHandler, listLinkBtnHandler, addListBtnHandler, editListTagBtnHandler, todoItemDetailInputEventHandler, deleteListBtnHendler } from './events'
import { listOfList } from './localstorage';

function createTodoComponent(item: Todo, index: number): Element {
	const todo = document.createElement('div');
	todo.classList.add('todo');
	todo.setAttribute('index', index.toString());

	// Priority
	const todoPriority = document.createElement('p');
	todoPriority.setAttribute('contenteditable', 'true'); // To edit the todo item detail
	todoPriority.textContent = item.getPriority().toString();
	todoPriority.classList.add('priority');
	todo.appendChild(todoPriority);

	// Title
	const todoTitle = document.createElement('h2');
	todoTitle.setAttribute('contenteditable', 'true');
	todoTitle.textContent = item.getTitle();
	todoTitle.classList.add('title');
	todo.appendChild(todoTitle);

	// Due Date
	const todoDueDate = document.createElement('p');
	todoDueDate.textContent = item.getDueDate();
	todoDueDate.classList.add('dueDate');
	todoDueDate.setAttribute('contenteditable', 'true');
	todo.appendChild(todoDueDate);

	// Description
	const todoDescription = document.createElement('p');
	todoDescription.textContent = item.getDescription();
	todoDescription.classList.add('descrption');
	todoDescription.setAttribute('contenteditable', 'true');
	todo.appendChild(todoDescription);

	// Delete button
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = "DELETE";
	deleteBtn.classList.add('delete')
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
		li.setAttribute('tag', list.getTag());
		const linkToList = document.createElement('a');
		linkToList.href = '#';
		linkToList.textContent = list.getTag();
		li.appendChild(linkToList);

		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'DELETE';
		deleteBtn.classList.add('delete-list');
		li.appendChild(deleteBtn);
		ul.appendChild(li);
	});

	const addListBtn = document.createElement('button');
	addListBtn.id = 'addList';
	addListBtn.textContent = 'Create new list';

	nav.appendChild(ul);
	nav.appendChild(addListBtn);

	return nav;
}

function editListTagComponent(list: TodoList) {
	const form = document.createElement('form');

	// List Tag edit fieldset
	const fieldsetListTag = document.createElement('fieldset');
	const fieldsetListTagLegend = document.createElement('legend');
	fieldsetListTagLegend.textContent = 'Change TodoList tag';
	fieldsetListTag.appendChild(fieldsetListTagLegend);

	const listTagInput = document.createElement('input');
	listTagInput.placeholder = list.getTag();

	listTagInput.id = 'editListTag';
	fieldsetListTag.appendChild(listTagInput);

	form.appendChild(fieldsetListTag);

	listTagInput.id = 'editTagInput';
	fieldsetListTag.appendChild(listTagInput);

	const editBtn = document.createElement('button');
	editBtn.setAttribute('type', 'button'); //Stop the page from reloading when clicked
	editBtn.textContent = 'EDIT';
	editBtn.id = 'editListTag'

	form.appendChild(fieldsetListTag);
	form.appendChild(editBtn);


	return form;
}

// Form receiving the inforùation to create a new todo
function createAddTodoComponent(): Element {
	// component container
	const component = document.createElement('div');
	component.classList.add('addInputContainer');
	component.id = 'addInputContainer';

	// Form
	const form = document.createElement('form');


	// Todo Creation
	const fieldsetTodo = document.createElement('fieldset');
	const fieldsetTodoLegend = document.createElement('legend');
	fieldsetTodoLegend.textContent = 'Add a Todo item';
	fieldsetTodo.appendChild(fieldsetTodoLegend);

	// Title
	const titleDiv = createInputComponent('titleInput', 'Title', 'text');
	fieldsetTodo.appendChild(titleDiv);

	// Description
	const descriptionDiv = createInputComponent('descriptionInput', 'Description', 'text');
	fieldsetTodo.appendChild(descriptionDiv);

	// Due Date
	const dueDateDiv = createInputComponent('dueDateInput', 'Due Date', 'text');
	fieldsetTodo.appendChild(dueDateDiv);

	// Priority
	const priorityDiv = createInputComponent('priorityInput', 'Priority', 'number');
	fieldsetTodo.appendChild(priorityDiv);

	// End of fieldsetTodo
	form.appendChild(fieldsetTodo);

	// Add the input container
	component.appendChild(form);

	// Create the add button
	const addBtn = document.createElement('button');
	addBtn.classList.add('add');
	addBtn.textContent = 'ADD';
	addBtn.id = 'addTodoBtn'
	component.appendChild(addBtn);

	return component;
}

// Used to create all the inputs in the form to add a todo item
function createInputComponent(inputId: string, labelContent: string, type: string) {
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
	while (root.hasChildNodes()) {
		root.removeChild(root.firstChild);
	}

	root.appendChild(createHeaderComponent());

	// Get all the todoList in the form of an array
	// so we can call navComponent() with it
	const allTodoLists: TodoList[] = [];
	for (const key in listOfList) {
		allTodoLists.push(listOfList[key]);
	}

	root.appendChild(navComponent(allTodoLists));

	const main = document.createElement('main');
	main.appendChild(editListTagComponent(list));
	main.appendChild(createAddTodoComponent());
	main.appendChild(createListComponent(list))
	root.appendChild(main);

	deleteBtnHandler(list);
	addButtonHandler(list);
	listLinkBtnHandler();

	addListBtnHandler();

	addListBtnHandler();
	editListTagBtnHandler(list);
	todoItemDetailInputEventHandler(list);
	deleteListBtnHendler(list);
}
