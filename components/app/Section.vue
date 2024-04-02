<script setup lang="ts" name="AppSection">
	// Props
	interface Props {
		title: string;
	}
	const props = defineProps<Props>();
</script>

<template>
	<section class="app-section">
		<h2 class="app-section__title">{{ props.title }}</h2>
		<slot />
	</section>
</template>

<style lang="scss" scoped>
	.app-section {
		margin: 40px 0;
		scroll-margin-top: 80px;
		.app-section__title {
			font-size: 2rem;
			text-align: center;
		}
	}
</style>
