import { Todo } from "./todo";

export interface TodoList {
	getList(): Todo[],
	getTag(): string,
	addTodo(todo: Todo): void,
	deleteTodo(index: number): void,
	setTag(tag: string): void,
};

export const TodoList = (tag: string): TodoList => {
	let _list: Todo[] = [];

	let _tag = tag;

	const getList = () => {
		return _list;
	}

	const getTag = () => {
		return _tag;
	}

	const setTag = (tag: string) => {
		_tag = tag;
	}

	const addTodo = (todo: Todo) => {
		_list.push(todo);
	}

	const deleteTodo = (index: number) => {
		_list.splice(index, 1);
	}

	return {
		getList,
		getTag,
		addTodo,
		deleteTodo,
		setTag,
	}
}
