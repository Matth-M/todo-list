function createTodoComponent(item) {
	const todo = document.createElement('div');

	const todoPriority = document.createElement('p');
	todoPriority.textContent = item.getPriority();
	todo.appendChild(todoPriority);

	const todoTitle = document.createElement('h2');
	todoTitle.textContent = item.getTitle();
	todo.appendChild(todoTitle);

	const todoDescription = document.createElement('p');
	todoDescription.textContent = item.getDescription();
	todo.appendChild(todoDescription);

	return todo;
}

export function displayList(list) {
	const root = document.querySelector('.root');
	list.forEach((todo) => {
		root.appendChild(createTodoComponent(todo));
	});
}
