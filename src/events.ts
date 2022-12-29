import {TodoList} from './todoList' 
import { Todo } from './todo'
import {displayApp} from './display'
import { listOfList } from './index';

export function deleteBtnHandler(list: TodoList) {
	const deleteBtns = document.querySelectorAll('.todo > .delete');
	deleteBtns.forEach((btn: HTMLButtonElement) => {
		btn.addEventListener('click', () => {
			// Get the index of the current todo item
			const container = btn.parentElement;
			const index = Number(container.getAttribute('index'));

			list.deleteTodo(index);
			displayApp(list);
		})
	});
}

export function addButtonHandler(list: TodoList){
	const addBtn = document.querySelector('#addTodoBtn');
	addBtn.addEventListener('click', () => {
		const title: HTMLInputElement = document.querySelector('#titleInput');
		const description: HTMLInputElement = document.querySelector('#descriptionInput');
		const dueDate: HTMLInputElement = document.querySelector('#dueDateInput');
		const priority: HTMLInputElement = document.querySelector('#priorityInput');

		const todo = Todo(title.value, description.value, dueDate.value, Number(priority.value));

		list.addTodo(todo);
		displayApp(list);
	});
}

export function listLinkBtnHandler() {
	const links = document.querySelectorAll('nav  a');
	links.forEach((link) => {
		link.addEventListener('click', () => {
			const tag = link.textContent;
			displayApp(listOfList[tag]);
		});
	});
}

export function addListBtnHandler() {
	const addListBtn = document.querySelector('#addList');
	addListBtn.addEventListener('click', () => {
		listOfList['new'] = TodoList('new');
		displayApp(listOfList['new'])
	});
}

export function editListTagBtnHandler(list: TodoList) {
	const editTagBtn = document.querySelector('#editListTag');
	const editTagInput: HTMLInputElement = document.querySelector('#editTagInput');
	editTagBtn.addEventListener('click', () => {
		const oldTag: string = list.getTag();
		const newTag = editTagInput.value;
		list.setTag(newTag);
		listOfList[newTag] = listOfList[oldTag];
		delete listOfList[oldTag];
		displayApp(list);
	});
}

export function todoItemDetailInputEventHandler(list: TodoList){
	// We get all the todo items displayed on the page
	const todoItems = document.querySelectorAll('.todo');
	todoItems.forEach(todoItem => {
		const index = Number(todoItem.getAttribute('index'));
		const itemContent = todoItem.childNodes;
		itemContent.forEach((child: HTMLElement) => {
			// We search which part of the todo item we are changing
			if(child.classList.contains('priority')) {
				child.addEventListener('input', () => {
					list.getList()[index].setPriority(Number(child.textContent));
				});
			} else if(child.classList.contains('title')){
				child.addEventListener('input', () => {
					list.getList()[index].setTitle(child.textContent);
				});
			} else if(child.classList.contains('dueDate')){
				child.addEventListener('input', () => {
					list.getList()[index].setDueDate(child.textContent);
				});
			} else if(child.classList.contains('description')){
				child.addEventListener('input', () => {
					list.getList()[index].setDescription(child.textContent);
				});
			}
		});
	});
}
