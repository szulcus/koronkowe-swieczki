<script setup lang="ts">
	interface Color {
		id: string;
		color: string;
		name: string;
		customName?: string;
		available: boolean;
	}
	const colors: Color[] = [
		{ id: '0000', color: '#F9F4E0', name: 'Natural', customName: 'Lniany', available: true },
		{ id: '0099', color: '#000000', name: 'Czarny', available: true },
		{ id: '0346', color: '#692506', name: 'Brązowy', available: true },
		{ id: '0347', color: '#DE6528', name: 'Rudy', available: false },
		{ id: '0350', color: '#BDC4A9', name: 'Zielonoszary', customName: 'Seledynowy', available: true },
		{ id: '0351', color: '#CCA14B', name: 'Złoty', available: true },
		{ id: '0352', color: '#DB302D', name: 'Czerwony', available: true },
		{ id: '0353', color: '#A7363F', name: 'Bordowy', available: true },
		{ id: '0354', color: '#CCC9C1', name: 'Jasnoszary', customName: 'Siwy', available: true },
		{ id: '0355', color: '#3B3E65', name: 'Granatowy', available: true },
		{ id: '0356', color: '#F9EFBE', name: 'Jasnożółty', customName: 'Cytrynowy', available: true },
		{ id: '0358', color: '#DBB1AE', name: 'Wrzosowy', customName: 'Różowy', available: true },
		{ id: '0359', color: '#A1C5CE', name: 'Błękitny', customName: 'Niebieski', available: true },
		{ id: '0360', color: '#ffe750', name: 'Żółty', available: true },
		{ id: '0361', color: '#ED9144', name: 'Pomarańczowy', available: true },
		{ id: '0362', color: '#CBC650', name: 'Groszkowy', customName: 'Limonkowy', available: true },
		{ id: '0363', color: '#64ADD0', name: 'Niebieski', customName: 'Chabrowy', available: true },
		{ id: '0364', color: '#B63058', name: 'Biskupi', customName: 'Malinowy', available: true },
		{ id: '0365', color: '#F3D9D3', name: 'Jasny wrzos', customName: 'Różowy pastelowy', available: true },
		{ id: '0367', color: '#FF4059', name: 'Malinowy', available: false },
		{ id: '0368', color: '#7F4A82', name: 'Fioletowy', available: true },
		{ id: '0369', color: '#295E18', name: 'Ciemnozielony', customName: 'Zielony', available: true },
		{ id: '0370', color: '#FCEAB6', name: 'Beżowy', available: true },
		{ id: '0400', color: '#FFFFFF', name: 'Biały', available: true },
		{ id: '1642', color: '#329B91', name: 'Brudny turkusowy', available: false },
		{ id: '1754', color: '#FAE6D2', name: 'Jasny łososiowy', available: false },
		{ id: '1815', color: '#C9C7C5', name: 'Beżowoszary', available: false },
		{ id: '1588B', color: '#F5E2FC', name: 'New|jasny fioletowy', available: false },
		{ id: '1626A', color: '#D9E2FF', name: 'New|jasny niebieskoszary', available: false },
		{ id: '1635C', color: '#B4C6CF', name: 'New|szaromorski', available: false },
		{ id: '1698A', color: '#EAFFBF', name: 'New|jasny groszkowy', available: false },
		{ id: '1782B', color: '#FCF3E8', name: 'New|perłowe ecru', available: false },
	];
	const availableColors = colors.filter((color) => color.available);
</script>

<template>
	<AppSection title="Kolory" class="home-colors">
		<div class="home-colors__description">Świeczki są dostępne w bogatej palecie barw:</div>
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
		<div class="section__warning">*Uwaga: prezentowane kolory mogą różnić się od kolorów rzeczywistych.</div>
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
					border: 2px dashed $text-secondary;
					border-radius: 5px;
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
