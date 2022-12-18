export const TodoList = (tag) => {
	let list = [];

	const getList = () => {
		return list;
	}

	const getTag = () => {
		return tag;
	}

	const addTodo = (todo) => {
		list.push(todo);
	}

	return {
		getList,
		getTag,
		addTodo,
	}
}
