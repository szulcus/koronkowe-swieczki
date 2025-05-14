<script setup lang="ts" name="HomeUsage">
	// import candleGiftUrl from '~/assets/images/usage/candle-gift.jpg';

	const rootStore = useRootStore();
</script>

<template>
	<AppSection v-if="rootStore.homeData" :title="rootStore.homeData.usage.title" class="home-usage">
		<div class="home-usage__content">
			<MDC :value="rootStore.homeData.usage.description" :tag="false"/>
			<!-- <p class="content__description">Małe świeczki są idealnym, gustownym podziękowaniem dla gości z okazji chrztu, komunii, bierzmowania, wieczoru panieńskiego, wesela, baby shower, urodzin, jubileuszu i wielu innych. Każda świeczka jest pakowana w eleganckie pudełko (białe, brązowe lub czarne) lub (zapachowa) w celofan przewiązany kokardą z personalizowaną etykietą i jest gwarancją wyjątkowego wrażenia.</p> -->
			<!-- <img class="content__img" :src="candleGiftUrl" alt="Podziękowanie dla gości" /> -->
			<!-- <p class="content__description">Koronkowe Świeczki są produktem premium - wysokiej jakości, tworzone z dbałością o szczegóły.<br />Rękodzieło jest zawsze dobrym wyborem!</p> -->
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-usage {
		@include decorative-bg;
		.home-usage__content {
			// margin-top: 20px; // 5px of decorative-bg
			&:deep(p) {
				margin-top: 20px;
				text-align: center;
			}
			&:deep(img) {
				display: block;
				width: min(480px, 100%);
				border: 1px solid $text-secondary;
				margin: 0 auto;
				margin-top: 20px;
				aspect-ratio: 16 / 9;
				object-fit: cover;
			}
		}
	}
</style>
