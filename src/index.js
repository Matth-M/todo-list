import {displayList} from './display'
import {Todo} from './todo'


let t1 = Todo();
// let t1 = Todo("Train", "Rentrer", "20/12/22", 1);
t1.setDueDate("20/12/2022");
t1.setTitle("Prendre le train");
t1.setDescription("Faut bien rentrer chez soi");
t1.setPriority(2);

let l1 = [];
l1.push(t1);

displayList(l1);
