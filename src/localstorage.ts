import { listOfList } from "./index";
import { TodoList } from "./todoList";


interface todoJSON {
	priority: number,
	description: string,
	title: string,
	dueDate: string,
}

interface listJSON {
	list: todoJSON[],
	tag: string,
}


export function updateLocalStorage() {
	//Update the lists tags
	localStorage.setItem("listOfList", JSON.stringify(listOfList));
	let listOfListJSON: listJSON[] = [];

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

	console.log(listOfListJSON);

	// console.log(localStorage.getItem("listOfList"));
	// console.log(listOfList);
}
