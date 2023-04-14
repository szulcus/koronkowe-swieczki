<script setup lang="ts" name="TheHeader">
	//
</script>

<template>
	<header class="the-header">
		<h1 class="the-header__title">Koronkowe Świeczki</h1>
		<div class="the-header__social-media">
			<a href="https://www.facebook.com/profile.php?id=100089067432296" target="_blank">
				<icon class="social-media__icon" name="fa-brands:facebook" />
			</a>
			<a href="https://www.instagram.com/koronkowe_swieczki" target="_blank">
				<icon class="social-media__icon" name="fa-brands:instagram" />
			</a>
			<!-- <icon class="social-media__icon" name="fa-solid:envelope" /> -->
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.the-header {
		position: fixed;
		z-index: 2;
		top: 0;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 10px 20px;
		border-bottom: 2px dashed $text-secondary;
		background-color: $bg-secondary;
		.the-header__title {
			font-size: 1.5rem;
		}
		.the-header__social-media {
			display: flex;
			gap: 10px;
			.social-media__icon {
				font-size: 20px;
				transition: 0.2s ease;
				@include hover {
					opacity: 0.7;

					// color: $bg-primary;
				}
			}
		}
	}
</style>
