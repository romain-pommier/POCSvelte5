import type { Task } from '../types';

export const getTaskById = (arrayTask: Task[], id: number): Task[] => {
	return arrayTask.filter((t) => t.id !== id);
};

export const sortTasks = (array: Task[]) => {
	return array.sort((a, b) => a.id - b.id);
};

export function toggleTaskStatus(
	task: Task,
	tasksRef: Task[],
	doneTasksRef: Task[]
): { tasksRef: Task[]; doneTasksRef: Task[] } {
	task.done = !task.done;
	console.log('task1111 => new => ', task.description);
	if (task.done) {
		const index = tasksRef.findIndex((t) => t.id === task.id);
		if (index !== -1) {
			tasksRef.splice(index, 1);
		}
		console.log('task 22222=> new => ', task.description);
		doneTasksRef.push(task);
		console.log(doneTasksRef[0].description);
	} else {
		const index = doneTasksRef.findIndex((t) => t.id === task.id);
		if (index !== -1) {
			doneTasksRef.splice(index, 1);
		}
		tasksRef.push(task);
	}
	return { tasksRef, doneTasksRef };
}
