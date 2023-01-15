import { Todo } from "./todo";
import { TodoList } from "./todoList";

interface todoJSON {
	priority: number;
	description: string;
	title: string;
	dueDate: string;
}

interface listJSON {
	list: todoJSON[];
	tag: string;
}

export const listOfList: {
	[tag: string]: TodoList;
} = {};

export function updateLocalStorage() {
	//Update the lists tags
	const listOfListJSON: listJSON[] = [];

	// Update each item of each list
	Object.keys(listOfList).forEach((listTag: string) => {
		// localStorage.setItem();
		const list: TodoList = listOfList[listTag];
		const listJSON: listJSON = {
			list: [],
			tag: list.getTag(),
		};

		list.getList().forEach((todo) => {
			const todoJSON: todoJSON = {
				priority: todo.getPriority(),
				description: todo.getDescription(),
				title: todo.getTitle(),
				dueDate: todo.getDueDate(),
			};

			listJSON.list.push(todoJSON);
		});
		listOfListJSON.push(listJSON);
	});

	localStorage.setItem("listOfList", JSON.stringify(listOfListJSON));
}

export function readFromLocalStorage() {
	const listOfListStorage: listJSON[] = JSON.parse(
		localStorage.getItem("listOfList")
	);

	// Create empty list if no data is stored
	if (listOfListStorage === null) {
		const mainList = TodoList("main");
		listOfList[mainList.getTag()] = mainList;
	} else {
		// Load data into listOfList
		listOfListStorage.forEach((listStorage: listJSON) => {
			const todoList: TodoList = TodoList(listStorage.tag);
			listStorage.list.forEach((todoStorage: todoJSON) => {
				const todo: Todo = Todo(
					todoStorage.title,
					todoStorage.description,
					todoStorage.dueDate,
					todoStorage.priority
				);
				todoList.addTodo(todo);
			});
			listOfList[todoList.getTag()] = todoList;
		});
	}
}
