<script lang="ts">
	import DraggableItem from '$lib/components/DraggableItem.svelte';
	import TaskItem from '$lib/components/TaskItem.svelte';
	import type { Task } from '../../types';
	import { handleDragOver } from '../../utils/dragAndDrop';

	let {
		tasks,
		changeStatusTask,
		updateTask
	}: {
		tasks: Task[];
		changeStatusTask: (task: Task) => void;
		updateTask: (updated: Task) => void;
	} = $props();

	const handleDrop = (event: DragEvent) => {
		event.preventDefault();
		const dataDrag = event.dataTransfer
			? JSON.parse(event.dataTransfer.getData('text/plain'))
			: undefined;
		if (!dataDrag) return;
		changeStatusTask(dataDrag);
	};
</script>

<ul ondragover={handleDragOver} ondrop={handleDrop}>
	{#each tasks as task (task.id)}
		<DraggableItem item={task}>
			<TaskItem {task} changeStatusTask={() => changeStatusTask(task)} {updateTask} />
		</DraggableItem>
	{/each}
</ul>
