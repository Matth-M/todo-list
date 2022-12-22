import {TodoList} from './todoList' 
import {displayApp} from './display'

export function addDeleteBtnHandler(list: TodoList) {
	const deleteBtns = document.querySelectorAll('.todo > .delete');
	deleteBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const index = Number(btn.getAttribute('index'));
			list.deleteTodo(index);
			displayApp(list);
		})
	});
}
