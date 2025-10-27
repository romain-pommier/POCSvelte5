<script lang="ts">
	import { goto } from '$app/navigation';
	import DraggableList from '$lib/components/DraggableList.svelte';
	import type { Task } from '../types';
	import { toggleTaskStatus } from '../utils/task';
	import { ButtonBoxPrimary } from '@wiseed/wikit';

	let tasks: Task[] = $state([
		{ id: 1, title: 'Tâche 1', name: 'tache-1', description: '', done: false, draggable: true },
		{ id: 2, title: 'Tâche 2', name: 'tache-2', description: '', done: false, draggable: true },
		{ id: 3, title: 'Tâche 3', name: 'tache-3', description: '', done: false, draggable: true },
		{ id: 4, title: 'Tâche 4', name: 'tache-4', description: '', done: false, draggable: true },
		{ id: 5, title: 'Tâche 5', name: 'tache-5', description: '', done: false, draggable: true },
		{ id: 6, title: 'Tâche 6', name: 'tache-6', description: '', done: false, draggable: true },
		{ id: 7, title: 'Tâche 7', name: 'tache-7', description: '', done: false, draggable: true }
	]);

	let doneTasks: Task[] = $state([]);

	const changeStatusTask = (task: Task) => {
		let result = toggleTaskStatus(task, tasks, doneTasks);
		tasks = [...result.tasksRef];
		doneTasks = [...result.doneTasksRef];
	};
	const updateTask = (updatedTask: Task) => {
		tasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
	};
</script>

<div class="container">
	<div class="flex justify-center">
		<ButtonBoxPrimary
			label="Go formulaire"
			classNames="rounded-full m-4"
			onclick={() => {
				goto('/formulaire');
			}}
		/>
	</div>

	<div class="flex gap-4">
		<div class="flex-1 flex flex-col border">
			<h2>À faire</h2>
			<DraggableList {tasks} {changeStatusTask} {updateTask} />
		</div>
		<div class="flex-1 flex flex-col border">
			<h2>Fait</h2>
			<DraggableList tasks={doneTasks} {changeStatusTask} {updateTask} />
		</div>
	</div>
</div>

<style lang="postcss">
	.container > div > div {
		min-height: 0;
	}
	h2 {
		text-align: center;
		padding: 10px;
	}

	:global {
		ul {
			padding: 1rem;
			min-height: 400px;
		}
		li div {
			margin: 0.5rem;
			padding: 0.5rem;
			background: #f9f9f9;
			cursor: grab;
		}
	}
</style>
