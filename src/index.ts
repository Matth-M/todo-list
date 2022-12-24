import {displayApp} from './display'
import {Todo} from './todo'
import {TodoList} from './todoList';


// Dummy item
let t1 = Todo("Train", "Rentrer", "20/12/22", 1);
let t2 = Todo("Train", "Rentrer", "20/12/22", 1);
t1.setDueDate("20/12/2022");
t1.setTitle("Prendre le train");
t1.setDescription("Faut bien rentrer chez soi");
t1.setPriority(2);

const mainList = TodoList("main");
mainList.addTodo(t1);
mainList.addTodo(t2);

const workList = TodoList('work');
for(let i = 0; i < 5; i++){
	workList.addTodo(Todo('WorkItem', 'Gotta work', '02/01/2023', 1));
}

// This list is used when clicking on the links in the navbar to display a specific list
// The text content of the link is the tag of the todoList 
// It is used as a key in this object to retrieve it when a click occurs

export let listOfList: {
	[index: string]: TodoList,
} = {
	'main': mainList,
}

listOfList[workList.getTag()] = workList;

displayApp(workList);
