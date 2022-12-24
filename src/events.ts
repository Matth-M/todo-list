import {TodoList} from './todoList' 
import { Todo } from './todo'
import {displayApp} from './display'
import { listOfList } from './index';

export function deleteBtnHandler(list: TodoList) {
	const deleteBtns = document.querySelectorAll('.todo > .delete');
	deleteBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const index = Number(btn.getAttribute('index'));

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
