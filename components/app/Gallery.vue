<script setup lang="ts">
	import lodashDebounce from 'lodash.debounce';

	// Props
	interface Props {
		active: boolean;
		images: (string | undefined)[];
		offer: string | undefined;
		activeIndex?: number;
	}
	const props = withDefaults(defineProps<Props>(), {
		activeIndex: 0,
	});

	// Emits
	interface Emits {
		(name: 'close'): void;
	}
	const emit = defineEmits<Emits>();

	// Composables
	const rootStore = useRootStore();

	// Thumbnails
	const thumbnailsRef = ref<HTMLDivElement[]>([]);
	const scrollToThumbnail = (index: number) => {
		const target = thumbnailsRef.value[index];
		if (!target) return;
		console.log('scrollToThumbnail', target.scrollIntoView);
		target.scrollIntoView({
			behavior: 'smooth',
			inline: 'center',
			block: 'nearest',
		});
	}
	
	// Gallery
	const galleryRef = ref<HTMLDivElement>()
	const currentIndex = ref(0);
	const scrollToIndex = (index: number, behavior: 'auto' | 'instant' | 'smooth' = 'smooth') => {
		console.log('scrollToIndex', galleryRef.value);
		if (!galleryRef.value) return
		const width = galleryRef.value.offsetWidth
		galleryRef.value.scrollTo({
			left: index * width,
			behavior
		})
		scrollToThumbnail(index);
	}
	const scrollToDirection = (direction: 'left' | 'right') => {
		scrollToIndex(direction === 'left' ? currentIndex.value - 1 : currentIndex.value + 1);
	}
	watch(currentIndex, lodashDebounce((newCurentIndex) => {
		scrollToThumbnail(newCurentIndex);
	}, 200))

	// Sync with thumbnails
	onMounted(() => {
	});

	const onScroll = () => {
		if (!galleryRef.value) return;
		const scrollLeft = galleryRef.value.scrollLeft;
		const width = galleryRef.value.offsetWidth;
		currentIndex.value = Math.round(scrollLeft / width);
	};
	// Loading
	const isLoading = ref<boolean>(false);
	watch(() => props.active, async (newActive) => {
		if (!newActive) {
			return;
		};
		isLoading.value = true;
		for (const image of props.images) {
			const src = getImage(image)
			if (!src) continue;
			await new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(img.height);
				img.onerror = reject;
				img.src = src;
			});
		}
		isLoading.value = false;
		await nextTick()
		scrollToIndex(props.activeIndex, 'instant');
		if (!galleryRef.value) return;
		galleryRef.value.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	})
	onUnmounted(() => {
		if (!galleryRef.value) return;
		galleryRef.value.removeEventListener('scroll', onScroll);
	});
</script>

<template>
	<transition>
		<div v-if="props.active" class="app-gallery">
			<client-only v-if="isLoading"><LdrsRing class="app-gallery__loader" /></client-only>
			<template v-else>
				<header class="app-gallery__header">
					<div class="header__counter">
						<span class="counter__count">{{ currentIndex + 1 }}</span> / {{ rootStore.galleryImages.length }}
					</div>
					<div class="header__close" @click="emit('close')">
						<icon name="fa6-solid:xmark" />
					</div>
				</header>
				<div class="app-gallery__offer">
					{{ props.offer ?? '-' }}
				</div>
				<div ref="galleryRef" class="app-gallery-container">
					<section
						v-for="(image, index) in rootStore.galleryImages"
						:key="index"
						class="container__section"
					>
						<img :src="getImage(image)" alt="Gallery image" class="section__image" />
					</section>
				</div>
				<footer class="app-gallery__footer">
					<div class="footer__thumbnail">
						<img
							ref="thumbnailsRef"
							v-for="(image, index) in rootStore.galleryImages"
							:key="index"
							:src="getImage(image, 's')"
							alt="Gallery image"
							:class="['thumbnail__image', { 'thumbnail__image--active': currentIndex === index }]"
							@click="scrollToIndex(index)"
						/>
					</div>
				</footer>
				<button
					:class="['app-gallery__control', 'app-gallery__control--left', { 'app-gallery__control--disabled': currentIndex === 0 }]"
					@click="scrollToDirection('left')"
					aria-label="Previous"
				>
					<icon name="fa6-solid:angle-left" />
				</button>
				<button
					:class="['app-gallery__control', 'app-gallery__control--right', { 'app-gallery__control--disabled': currentIndex === rootStore.galleryImages.length - 1 }]"
					@click="scrollToDirection('right')"
					aria-label="Next"
				>
					<icon name="fa6-solid:angle-right" />
				</button>
			</template>
		</div>
	</transition>
</template>

<style scoped lang="scss">
	.app-gallery {
		position: fixed;
		inset: 0;
		z-index: 2;
		background-color: rgb(black, 0.9);
		display: flex;
		flex-direction: column;
		.app-gallery__loader {
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
		}
		.app-gallery__header {
			position: relative;
			display: flex;
			justify-content: space-between;
			padding: 16px;
			align-items: center;
			.header__close {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				z-index: 10;
				font-size: 1rem;
				color: $bg-primary;
				cursor: pointer;
				transition: 0.2s ease;
				background-color: rgb($bg-primary, 0.3);
				&:hover {
					background-color: rgb($bg-primary, 0.5);
				}
			}
			.header__counter {
				color: $bg-secondary;
				.counter__count {
					color: $bg-primary;
					font-weight: bold;
					font-size: 1.25rem;
				}
			}
		}
		.app-gallery__offer {
			color: $bg-primary;
			font-weight: bold;
			text-align: center;
			// background-color: red;
			margin-bottom: 10px;
		}
		.app-gallery-container {
			flex: 1;
			display: flex;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
			scrollbar-width: none;
			overscroll-behavior: contain;
			&::-webkit-scrollbar {
				display: none;
			}
			-webkit-overflow-scrolling: touch;
			.container__section {
				padding: 0 10px;
				flex: 0 0 100%;
				scroll-snap-align: start;
				scroll-snap-stop: always;
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
			align-items: center;
			padding: 16px 10px;
			gap: 10px;
			overflow-x: auto;
			// scroll-snap-type: x mandatory;
			.footer__thumbnail {
				flex: 1;
				overflow: auto;
				display: flex;
				margin: auto;
				gap: 10px;
				max-width: max-content;
				scrollbar-width: none;
				&::-webkit-scrollbar {
					display: none;
				}
				// background-color: pink;
				.thumbnail__image {
					// margin: 0 5px;
					width: 60px;
					aspect-ratio: 4 / 3;
					object-fit: cover;
					border-radius: 6px;
					opacity: 0.5;
					transition: 0.2s ease;
					// scroll-snap-align: start;
					@include hover {
						opacity: 0.6;
					}
					&.thumbnail__image--active {
						pointer-events: none;
						opacity: 1;
					}
				}
			}
		}
		.app-gallery__control {
			position: absolute;
			top: 50%;
			translate: 0 -50%;
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 10;
			font-size: 1rem;
			color: $bg-primary;
			cursor: pointer;
			transition: 0.2s ease;
			background-color: rgb($bg-primary, 0.3);
			&:hover {
				background-color: rgb($bg-primary, 0.5);
			}
			&.app-gallery__control--left {
				left: 20px;
			}
			&.app-gallery__control--right {
				right: 20px;
			}
			&.app-gallery__control--disabled {
				pointer-events: none;
				filter: grayscale(1);
				opacity: 0.7;
			}
		}
	}

</style>
