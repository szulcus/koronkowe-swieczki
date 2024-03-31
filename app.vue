<script setup lang="ts" name="App" />

<template>
	<TheHeader />
	<main class="app">
		<HomeIntro />
		<HomeOffer />
		<HomeColors />
		<HomeScentedOffer />
		<HomeUsage />
		<HomeContact />
	</main>
	<TheFooter />
</template>

<style scoped lang="scss">
	.app {
		width: min(1000px, 100%);
		padding: 20px;
		margin: 0 auto;
	}
</style>
