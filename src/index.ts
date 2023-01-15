import { displayApp } from './display'
import { readFromLocalStorage, listOfList } from './localstorage';


// Import data from local storage
readFromLocalStorage();

// Display the app
displayApp(listOfList['main']);
