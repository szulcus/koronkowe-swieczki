<script setup lang="ts">
const rootStore = useRootStore()
</script>

<template>
	<TheHeader />
	<main class="app">
		<HomeIntro />
		<!-- <div class="intro__new">
			<b>NOWOŚĆ: <a href="#edycja-zapachowa">Edycja zapachowa</a><br /></b>
		</div> -->
		<HomeOffer />
		<!-- <HomeColors /> -->
		<HomeKashubianOffer />
		<HomeScentedOffer />
		<HomeUsage />
		<HomeSafety />
		<HomeContact />
		<div v-if="rootStore.homeData?.id === 'dev'" class="app__version">DEV</div>
	</main>
	<TheFooter />
	<TheCookies />
	<AppGallery
		:active="!!rootStore.activeGallery"
		:images="rootStore.galleryImages"
		:offer="rootStore.galleryOffer"
		:active-index="rootStore.activeGallery?.index"
		@close="rootStore.closeGallery"
	/>
</template>

<style scoped lang="scss">
	.app {
		width: min(1000px, 100%);
		padding: 20px;
		margin: 0 auto;
		.app__version {
			position: fixed;
			bottom: 10px;
			right: 10px;
			background-color: $text-primary;
			color: $bg-primary;
			padding: 6px 10px;
			font-weight: bold;
			outline: $text-secondary solid 1px;
			outline-offset: 2px;
		}
		.intro__new {
			padding: 10px;
			border-top: 1px solid $text-secondary;
			border-bottom: 1px solid $text-secondary;
			background-color: $bg-secondary;
			text-align: center;
		}
	}
</style>
