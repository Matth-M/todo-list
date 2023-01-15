import { updateLocalStorage } from "./localstorage";
import { Todo } from "./todo";

export interface TodoList {
	getList(): Todo[],
	getTag(): string,
	addTodo(todo: Todo): void,
	deleteTodo(index: number): void,
	setTag(tag: string): void,
}

export const TodoList = (tag: string): TodoList => {
	const _list: Todo[] = [];

	let _tag = tag;

	const getList = () => {
		return _list;
	}

	const getTag = () => {
		return _tag;
	}

	const setTag = (tag: string) => {
		_tag = tag;
		updateLocalStorage();
	}

	const addTodo = (todo: Todo) => {
		_list.push(todo);
		updateLocalStorage();
	}

	const deleteTodo = (index: number) => {
		_list.splice(index, 1);
		updateLocalStorage();
	}

	return {
		getList,
		getTag,
		addTodo,
		deleteTodo,
		setTag,
	}
}
