<script lang="ts">
	let { task, changeStatusTask, updateTask } = $props();
	let isOpen = $state(false);
</script>

<div class="flex flex-col">
	<div class="flex justify-between">
		<div>
			<input type="checkbox" checked={task.done} onchange={() => changeStatusTask(task)} />
			{task.title}
		</div>

		<button onclick={() => (isOpen = !isOpen)}>
			<img
				src="./down_arrow.svg"
				alt="arrow"
				style="
				transform: rotate({isOpen ? 180 : 0}deg);
				opacity: {isOpen ? 0.7 : 1};
				transition:
					transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
					opacity 0.4s ease 0.1s;
			"
			/>
		</button>
	</div>
	<div class={`task_descrition ${isOpen ? 'open' : ''} mt-2 px-4 text-gray-700`}>
		<textarea
			oninput={(e) => {
				task = { ...task, description: e.target.value };
				return updateTask(task);
			}}
			name="description task"
			id="">{task.description}</textarea
		>
	</div>
</div>

<style>
	img {
		height: 20px;
		width: 20px;
	}
	textarea {
		background: #fffefe;
		padding: 10px;
		min-height: 150px;
		width: 100%;
	}

	.task_descrition.open {
		max-height: 300px;
	}
	.task_descrition {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s ease;
		padding: 0;
		margin: 0;
	}
</style>
