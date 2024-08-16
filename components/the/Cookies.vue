<script setup lang="ts" name="TheCookies">
	// Emits
	interface Emits {
		(name: 'accept-cookies'): void;
	}
	const emit = defineEmits<Emits>();

	// Cookies
	const accepted = ref<boolean>(true);

	onMounted(() => {
		accepted.value = !!localStorage.getItem('cookies-accepted');
	});

	const acceptCookies = () => {
		localStorage.setItem('cookies-accepted', new Date().toISOString());
		accepted.value = true;
		emit('accept-cookies');
	};
</script>

<template>
	<transition name="cookies">
		<div v-if="!accepted" class="the-cookies">
			<div class="the-cookies__content">
				<div class="content__wrapper">
					<div class="wrapper__close" @click="acceptCookies">
						<icon name="fa6-solid:xmark" />
					</div>
					<p class="wrapper__name">Pliki cookies</p>
					<hr class="wrapper__line" />
					<div class="wrapper__content">
						Ta strona używa plików cookies.<br />
						Jeśli nie zmienisz ustawień, zostaną zapisane w pamięci Twojego urządzenia.
					</div>
					<button class="wrapper__button" @click="acceptCookies">Akceptuję</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
	.the-cookies {
		position: fixed;
		z-index: 99;
		bottom: 10px;
		left: 10px;
		width: calc(100% - 20px);
		.the-cookies__content {
			padding: 30px;
			background-color: $text-primary;
			box-shadow: 0 0 10px $text-primary;
			.content__wrapper {
				display: flex;
				width: min(1140px, 100%);
				flex-direction: column;
				margin: 0 auto;
				@media (min-width: 1024px) {
					flex-direction: row;
					align-items: center;
				}
				.wrapper__name {
					margin-bottom: 10px;
					color: $bg-primary;
					font-weight: bold;
					@media (min-width: 1024px) {
						margin-bottom: 0;
					}
				}
				.wrapper__line {
					display: none;
					width: 0;
					height: 50px;
					border: none;
					border-left: 1px solid $bg-primary;
					margin: 0 30px;
					@media (min-width: 1024px) {
						display: block;
					}
				}
				.wrapper__content {
					flex: 1;
					margin-right: 30px;
					color: $bg-primary;
					font-size: 0.875rem;
					line-height: 1.3em;
				}
				.wrapper__close {
					position: absolute;
					top: 20px;
					right: 20px;
					color: $bg-primary;
					transition: opacity 0.2s ease;
					@include hover {
						opacity: 0.7;
					}
				}
				.wrapper__button {
					padding: 8px 12px;
					border: none;
					border-radius: 5px;
					margin-top: 15px;
					background-color: $bg-primary;
					color: $text-primary;
					font-size: 0.875rem;
					font-weight: 600;
					transition: 0.2s ease;
					@include hover {
						opacity: 0.7;
					}
				}
			}
		}
	}

	// animation
	.cookies-enter-active,
	.cookies-leave-active {
		transition: opacity 0.5s ease;
	}
	.cookies-enter,
	.cookies-leave-active {
		opacity: 0;
	}
</style>
