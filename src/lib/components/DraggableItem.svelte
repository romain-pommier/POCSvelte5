<script lang="ts">
	import type { Task } from '../../types';

	let { children, item } = $props();

	const handleDragStart = (event: DragEvent, task: Task) => {
		event.dataTransfer?.setData('text/plain', JSON.stringify(task));
	};
</script>

{#if children}
	<li draggable={item.draggable} ondragstart={(e) => handleDragStart(e, item, 'done')}>
		{@render children?.()}
	</li>
{/if}
