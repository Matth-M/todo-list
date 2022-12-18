import {displayList, displayPageStructure} from './display'
import {Todo} from './todo'
import {TodoList} from './todoList';


let t1 = Todo();
// let t1 = Todo("Train", "Rentrer", "20/12/22", 1);
t1.setDueDate("20/12/2022");
t1.setTitle("Prendre le train");
t1.setDescription("Faut bien rentrer chez soi");
t1.setPriority(2);

const main = TodoList("main");
main.addTodo(t1);

displayPageStructure();
displayList(main.getList());
