export interface Todo {
	// title: string,
	// description: string,
	// dueDate: string,
	// priority: number,
	getPriority(): number,
	getDescription(): string,
	getTitle(): string,
	getDueDate(): string,
	setTitle(t: string): void,
	setDueDate(d: string): void,
	setTitle(t: string): void,
	setPriority(p: number): void,
	setDescription(d: string): void,
	setIndex(i: number): void,
	getIndex(): number,
};

export const Todo = function(title: string, description: string, dueDate: string, priority: number): Todo {
	const getTitle = (): string => {
		return title;
	}
	
	const getDescription = (): string => {
		return description;
	}

	const getDueDate = (): string => {
		return dueDate;
	}

	function setDueDate(date: string) {
		dueDate = date;
	}


	function setDescription(d: string): void {
		description = d;
	}


	const setTitle = (t: string) => {
		title = t;
	}

	const getPriority = (): number => {
		return priority;
	}

	// The higher the most urgent
	function setPriority(p: number) {
		priority = p;
	}


	let _index = 0;

	function setIndex(index: number) {
		_index = index;
	}

	function getIndex() {
		return _index;
	}
	
	return {
		getTitle,
		getDescription,
		getDueDate,
		getPriority,
		setPriority,
		setTitle,
		setDescription,
		setDueDate,
		setIndex,
		getIndex,
	}
};
