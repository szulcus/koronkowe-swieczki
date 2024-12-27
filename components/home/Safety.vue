<script setup lang="ts" name="HomeUsage">
	const safetyList = [
		{
			title: 'Świeca bryłowa, ozdobna, wolnostojąca',
			items: [
				'Służy celom dekoracyjnym, ale może być palona pod warunkiem zachowania ostrożności.',
				'Nie spalaj jej poniżej wysokości koronki.',
				'Zawsze upewnij się, że świeca znajduje się w bezpiecznym miejscu i nie jest narażona na przeciągi.',
			],
		},
		{
			title: 'Świeca sojowa w szkle',
			items: [
				'Umieść świecę w stabilnym, bezpiecznym miejscu, z dala od dzieci i zwierząt.',
				'Przed każdym zapaleniem skróć knot do 0,5 cm.',
				'Nie gaś świecy, dopóki cała tafla wosku nie roztopi się równomiernie.',
				'Całkowity czas palenia jednej sesji nie powinien przekraczać 4 godzin.',
				'Pozostaw ok. 2 cm wosku na dnie - nie spalaj świecy do końca.',
			],
		},
		{
			title: 'Świeczki typu tealight',
			items: [
				'Służą celom dekoracyjnym lub jako próbki zapachowe, mogą być palone pod warunkiem zachowania szczególnej ostrożności.',
				'Uważaj przy rozpalaniu, aby płomień nie zajął koronki.',
				'Korzystaj z dala od przedmiotów, które mogą łatwo zająć się ogniem.',
				'Trzymaj w miejscu niedostępnym dla dzieci i zwierząt.',
				'Nie zostawiaj płonącej świeczki bez nadzoru.',
				'Płomień należy gasić, zduszając go. Nie gaś świecy dmuchnięciem.',
			],
		},
		{
			title: 'Ogólne zasady bezpieczeństwa',
			items: [
				'Nigdy nie pozostawiaj palącej się świecy bez nadzoru.',
				'Trzymaj świecę z dala od łatwopalnych przedmiotów, dzieci i zwierząt.',
				'Zwróć uwagę, aby płomień nie zajął ozdobnej koronki.',
				'Nie przenoś świecy, gdy jest odpalona.',
			],
		},
	];

</script>

<template>
	<AppSection title="Bezpieczeństwo" class="home-safety">
		<div class="home-safety__content">
			<section class="content__description">Przestrzegaj podanych zaleceń podczas korzystania z produktów:</section>
			<section v-for="(section, sectionIndex) in safetyList" :key="sectionIndex" class="content__section">
				<h3 class="section__title">{{ section.title }}</h3>
				<ul class="section__list">
					<li
						v-for="(item, itemIndex) in section.items"
						:key="itemIndex"
						class="list__item"
					>
						{{ item }}
					</li>
				</ul>
			</section>
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-safety {
		@include decorative-bg;
		.home-safety__content {
			margin-top: 20px; // 5px of decorative-bg
			.content__description {
				text-align: center;
			}
			.content__section {
				margin-top: 20px;
				.section__title {
					margin-bottom: 10px;
					font-size: 20px;
				}
				.section__list {
					padding-left: 20px;
					list-style-type: none;
					.list__item {
						&::before {
							content: '🔥 ';
						}
					}

				}
			}
			.content__img {
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
