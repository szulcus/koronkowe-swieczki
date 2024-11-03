<script setup lang="ts">
	const { availableColors } = useColors();
</script>

<template>
	<AppSection title="Kolory" class="home-colors">
		<div class="home-colors__description">Koronkowe Świeczki są dostępne w bogatej palecie barw:</div>
		<ul class="home-colors__grid">
			<li
				v-for="colorVariant in availableColors"
				:key="colorVariant.id"
				class="grid__item"
			>
				<div class="item__sample" :style="{ '--bg': colorVariant.color }" />
				{{ colorVariant.customName ?? colorVariant.name }}
			</li>
		</ul>
		<div class="section__warning">Uwaga: prezentowane kolory mogą różnić się od kolorów rzeczywistych.</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-colors {
		.home-colors__description {
			margin-top: 20px;
			margin-bottom: 10px;
			text-align: center;
		}
		.home-colors__grid {
			display: grid;
			margin-top: 20px;
			gap: 10px;
			grid-template-columns: repeat(1, 1fr);
			@include decorative-bg;
			@media (min-width: 480px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (min-width: 720px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media (min-width: 900px) {
				grid-template-columns: repeat(4, 1fr);
			}
			.grid__item {
				display: flex;
				align-items: center;
				font-size: 0.875rem;
				gap: 5px;
				.item__sample {
					width: 30px;
					height: 30px;
					border: 1px solid $text-secondary;
					background-color: var(--bg);
				}
			}
		}
		.section__warning {
			margin-top: 5px;
			font-size: 10px;
		}
	}
</style>
