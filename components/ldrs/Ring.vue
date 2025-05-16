<script setup lang="ts">
	import { ring } from 'ldrs';

	onMounted(() => {
		if (import.meta.client) {
			ring.register();
		}
	})

	// Options
	defineOptions({ name: 'LoaderRing' });

	// Props
	interface Props {
		size?: 'small';
	}
	const props = withDefaults(defineProps<Props>(), {
		size: 'small',
	});

	const sizes = readonly({
		small: 16,
	});
	const strokes = readonly({
		small: 3,
	});
</script>

<template>
	<div class="ldrs-ring">
		<client-only>
			<component
				:is="'l-ring'"
				:size="sizes[props.size]"
				:stroke="strokes[props.size]"
				:bg-opacity="0"
				:speed="2"
				color="currentColor"
			/>
		</client-only>
	</div>
</template>

<style lang="scss" scoped>
	.ldrs-ring {
		color: $bg-primary;
		l-ring {
			vertical-align: middle;
		}
	}
</style>
