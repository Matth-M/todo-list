export interface Todo {
	getPriority(): number,
	getDescription(): string,
	getTitle(): string,
	getDueDate(): string,
	setTitle(t: string): void,
	setDueDate(d: string): void,
	setTitle(t: string): void,
	setPriority(p: number): void,
	setDescription(d: string): void,
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

	return {
		getTitle,
		getDescription,
		getDueDate,
		getPriority,
		setPriority,
		setTitle,
		setDescription,
		setDueDate,
	}
};
