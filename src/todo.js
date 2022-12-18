export const Todo = function(title, description, dueDate, priority) {
	const getTitle = () => {
		return title;
	}
	
	const getDescription = () => {
		return description;
	}

	const getDueDate = () => {
		return dueDate;
	}

	const getPriority = () => {
		return priority;
	}

	function setDescription(d) {
		description = d;
	}


	const setTitle = (t) => {
		title = t;
	}

	// The higher the most urgent
	function setPriority(p) {
		priority = p;
	}

	function setDueDate(date) {
		dueDate = date;
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
