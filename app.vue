<script setup lang="ts" name="App" />

<template>
	<TheHeader />
	<main class="app">
		<HomeIntro />
		<div class="intro__new">
			<b>NOWOŚĆ: <a href="#edycja-zapachowa">Edycja zapachowa</a><br /></b>
		</div>
		<HomeOffer />
		<HomeColors />
		<HomeScentedOffer />
		<HomeUsage />
		<HomeContact />
	</main>
	<TheFooter />
	<TheCookies />
</template>

<style scoped lang="scss">
	.app {
		width: min(1000px, 100%);
		padding: 20px;
		margin: 0 auto;
		.intro__new {
			padding: 10px;
			border-top: 1px solid $text-secondary;
			border-bottom: 1px solid $text-secondary;
			background-color: $bg-secondary;
			text-align: center;
		}
	}
</style>
