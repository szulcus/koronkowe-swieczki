<script setup lang="ts">
	// Composables
	const rootStore = useRootStore();

	const galleryRef = ref<HTMLDivElement | null>(null)

	const scroll = (direction: 'left' | 'right') => {
		if (!galleryRef.value) return
		const width = galleryRef.value.offsetWidth
		galleryRef.value.scrollBy({
			left: direction === 'left' ? -width : width,
			behavior: 'smooth'
		})
	}
	const scrollToIndex = (index: number) => {
		if (!galleryRef.value) return
		const width = galleryRef.value.offsetWidth
		galleryRef.value.scrollTo({
			left: index * width,
			behavior: 'smooth'
		})
	}

	const currentIndex = ref(0);
	onMounted(() => {
		if (!galleryRef.value) return;

		const el = galleryRef.value;

		const onScroll = () => {
			const scrollLeft = el.scrollLeft;
			const width = el.offsetWidth;
			currentIndex.value = Math.round(scrollLeft / width);
		};

		el.addEventListener('scroll', onScroll, { passive: true });
		onScroll(); // wywołaj na start

		onUnmounted(() => {
			el.removeEventListener('scroll', onScroll);
		});
	});
</script>

<template>
	<div class="app-gallery">
		<div ref="galleryRef" class="app-gallery-container">
			<section
				v-for="(image, index) in rootStore.galleryImages"
				:key="index"
				class="container__section"
			>
				<img :src="image" alt="Gallery image" class="section__image" />
			</section>
		</div>
		<div class="app-gallery__footer">
			<img
				v-for="(image, index) in rootStore.galleryImages"
				:key="index"
				:src="image"
				alt="Gallery image"
				:class="['footer__image', { 'footer__image--active': currentIndex === index }]"
				@click="scrollToIndex(index)"
			/>
		</div>
		<button
			class="app-gallery__control app-gallery__control--left"
			@click="scroll('left')"
			aria-label="Previous"
		>
			<icon name="fa6-solid:angle-left" />
		</button>
		<button
			class="app-gallery__control app-gallery__control--right"
			@click="scroll('right')"
			aria-label="Next"
		>
			<icon name="fa6-solid:angle-right" />
		</button>
	</div>
</template>

<style scoped lang="scss">
	.app-gallery {
		position: fixed;
		inset: 0;
		z-index: 2;
		background-color: rgb(black, 0.8);
		display: flex;
		flex-direction: column;
		.app-gallery-container {
			flex: 1;
			display: flex;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			// height: 100%;
			// width: 100%;
			scroll-behavior: smooth;
			scrollbar-width: none;
			// background-color: red;
			&::-webkit-scrollbar {
				display: none;
			}
			.container__section {
				flex: 0 0 100%;
				scroll-snap-align: start;
				display: flex;
				align-items: center;
				justify-content: center;
				.section__image {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}
		.app-gallery__footer {
			display: flex;
			justify-content: center;
			padding: 16px;
			gap: 10px;
			.footer__image {
				width: 50px;
				aspect-ratio: 4 / 3;
				object-fit: cover;
				border-radius: 6px;
				opacity: 0.5;
				transition: 0.2s ease;
				@include hover {
					opacity: 0.6;
				}
				&.footer__image--active {
					pointer-events: none;
					opacity: 1;
				}
			}
		}
	}

	.app-gallery__control {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		font-size: 1rem;
		color: $text-secondary;
		cursor: pointer;
		transition: 0.2s ease;
		background-color: $bg-primary;
		// outline: 1px solid $text-secondary;
		// outline-offset: -3px;
		&:hover {
			background-color: $bg-secondary;
		}
		&.app-gallery__control--left {
			left: 10px;
			// justify-content: flex-start;
		}
		&.app-gallery__control--right {
			right: 10px;
			// justify-content: flex-end;
		}
	}


	
</style>
