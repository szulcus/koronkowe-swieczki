<script setup lang="ts" name="HomeUsage">
	import candleGiftUrl from '~/assets/images/usage/candle-gift.jpg';
</script>

<template>
	<AppSection title="Zastosowanie" class="home-usage">
		<!-- <div class="home-usage__description">v</div> -->
		<div class="home-usage__content">
			<p class="content__description">Małe świeczki są idealnym, gustownym podziękowaniem dla gości z okazji chrztu, komunii, bierzmowania, wieczoru panieńskiego, wesela, baby shower, urodzin, jubileuszu i wielu innych. Każda świeczka jest elegancko pakowana w pudełko (białe, brązowe lub czarne) i jest gwarancją wyjątkowego wrażenia.</p>
			<img class="content__img" :src="candleGiftUrl" alt="Podziękowanie dla gości" />
			<p class="content__description">Koronkowe Świeczki są produktem premium - wysokiej jakości, tworzone z dbałością o szczegóły. Rękodzieło jest zawsze dobrym wyborem!</p>
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-usage {
		@include decorative-bg;
		.home-usage__content {
			margin-top: 20px; // 5px of decorative-bg
			.content__img {
				display: block;
				width: min(480px, 100%);
				margin: 0 auto;
				margin-top: 20px;
				aspect-ratio: 16 / 9;
				object-fit: cover;
			}
		}
	}
</style>
