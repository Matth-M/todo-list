import {displayPageStructure} from './display'
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

displayPageStructure(mainList);
