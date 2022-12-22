import { Todo } from "./todo";

export interface TodoList {
	// list: Todo[],
	// tag: string,
	getList(): Todo[],
	getTag(): string,
	addTodo(todo: Todo): void,
	deleteTodo(index: number): void,
};

export const TodoList = (tag: string): TodoList => {
	let list: Todo[] = [];

	const getList = () => {
		return list;
	}

	const getTag = () => {
		return tag;
	}

	const addTodo = (todo: Todo) => {
		list.push(todo);
	}

	const deleteTodo = (index: number) => {
		list.splice(index, 1);
	}

	return {
		getList,
		getTag,
		addTodo,
		deleteTodo,
	}
}
