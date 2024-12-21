function saveTasks(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
	return JSON.parse(localStorage.getItem('tasks') || '[]');
}

async function fetchTodos() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		return await res.json();
	} catch (error) {
		console.error('Error fetching todos:', error);
		return [];
	}
}

function renderTask(task, tasks, tableBody) {
	const row = document.createElement('tr');

	const titleCell = document.createElement('td');
	titleCell.className = 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0';
	titleCell.textContent = task.text;
	if (task.completed) {
		titleCell.classList.add('line-through', 'bg-green-100');
	}
	row.appendChild(titleCell);

	const statusCell = document.createElement('td');
	statusCell.className = 'whitespace-nowrap px-3 py-4 text-sm text-gray-500';
	statusCell.textContent = task.completed ? 'Completed' : 'In Progress';
	row.appendChild(statusCell);

	const actionCell = document.createElement('td');
	actionCell.className = 'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0';

	const toggleButton = document.createElement('button');
	toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
	toggleButton.className = 'text-indigo-600 hover:text-indigo-900 mr-2';
	toggleButton.onclick = () => {
		task.completed = !task.completed;
		saveTasks(tasks);
		refreshTasks(tasks, tableBody);
	};

	const removeButton = document.createElement('button');
	removeButton.textContent = 'Remove';
	removeButton.className = 'text-red-600 hover:text-red-900';
	removeButton.onclick = () => {
		tasks.splice(tasks.indexOf(task), 1);
		saveTasks(tasks);
		refreshTasks(tasks, tableBody);
	};

	actionCell.appendChild(toggleButton);
	actionCell.appendChild(removeButton);
	row.appendChild(actionCell);

	tableBody.appendChild(row);
}

function refreshTasks(tasks, tableBody) {
	tableBody.innerHTML = '';
	tasks.forEach((task) => renderTask(task, tasks, tableBody));
}

window.addEventListener('load', async () => {
	const tasks = loadTasks();
	const tableBody = document.querySelector('#table-body');

	refreshTasks(tasks, tableBody);

	document.getElementById('addTaskBtn').onclick = () => {
		const input = document.getElementById('taskInput');
		if (input.value.trim()) {
			const newTask = { text: input.value.trim(), completed: false };
			tasks.push(newTask);
			saveTasks(tasks);
			renderTask(newTask, tasks, tableBody);
			input.value = '';
		}
	};

	document.getElementById('suggestTaskBtn').onclick = async () => {
		const todos = await fetchTodos();

		const incompleteTodos = todos.filter((todo) => !todo.completed);

		if (incompleteTodos.length > 0) {
			const randomIndex = Math.floor(Math.random() * incompleteTodos.length);
			const suggestion = incompleteTodos[randomIndex];

			const newTask = { text: suggestion.title, completed: false };
			tasks.push(newTask);
			saveTasks(tasks);
			renderTask(newTask, tasks, tableBody);
		} else {
			alert('No suggestions available.');
		}
	};
});

if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		saveTasks,
		loadTasks,
		renderTask,
	};
}
