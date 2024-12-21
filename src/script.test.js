/**
 * @jest-environment jsdom
 */

const { saveTasks, renderTask } = require('./script.js');

describe('Add task', () => {
	let tasks;
	let tableBody;

	beforeEach(() => {
		document.body.innerHTML = `
      <table>
        <tbody id="table-body"></tbody>
      </table>
    `;
		tableBody = document.getElementById('table-body');
		tasks = [];
		localStorage.clear();
	});

	test('Add task correctly', () => {
		const newTask = { text: 'Test Task', completed: false };
		tasks.push(newTask);
		saveTasks(tasks);

		const savedTasks = JSON.parse(localStorage.getItem('tasks'));
		expect(savedTasks).toHaveLength(1);
		expect(savedTasks[0].text).toBe('Test Task');
		expect(savedTasks[0].completed).toBe(false);

		renderTask(newTask, tasks, tableBody);
		expect(tableBody.children).toHaveLength(1);
		const renderedTask = tableBody.children[0].querySelector('td');
		expect(renderedTask.textContent).toBe('Test Task');
	});
});
