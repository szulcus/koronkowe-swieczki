<script setup lang="ts" name="HomeUsage">
	import candleGiftUrl from '~/assets/images/usage/candle-gift.jpg';
</script>

<template>
	<AppSection title="Zastosowanie" class="home-usage">
		<div class="home-usage__content">
			<p class="content__description">Małe świeczki są doskonałym pomysłem na podziękowania dla gości z okazji: chrztu, komunii, bierzmowania, wieczoru panieńskiego, wesela, baby shower, urodzin, jubileuszu i nie tylko! Są pakowane w gustowne pudełka (białe, brązowe lub czarne), prezentują się bardzo elegancko!</p>
			<img class="content__img" :src="candleGiftUrl" alt="Podziękowanie dla gości" />
			<p class="content__description">Koronkowe Świeczki zapakowane pojedynczo lub w zestawach, w celofan lub pudełko mogą również być świetnym prezentem z okazji różnych uroczystości czy świąt. Obdarowana takim upominkiem osoba z całą pewnością poczuje się wyjątkowo! Są produktem premium - wysokiej jakości, tworzone z dbałością o szczegóły.</p>
			<p class="content__description">Rękodzieło jest zawsze dobrym wyborem!</p>
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-usage {
		@include decorative-bg;
		.home-usage__content {
			.content__description {
				margin-top: 20px;
				text-align: center;
				white-space: pre-line;
			}
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
