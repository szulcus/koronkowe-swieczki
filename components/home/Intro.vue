<template>
	<div class="home-intro">
		<img class="intro__logo" src="~/assets/images/logo.svg" alt="Koronkowe Świeczki Logo" />
		<div class="intro__content">
			Z miłością, pasją i sercem tworzę eleganckie, stylowe ubranka - koronki na świeczki. Każde z nich wykonuję ręcznie, szydełkując z wysokiej jakości, merceryzowanej bawełny polskiej marki Ariadna. Do każdego produktu dołączam świeczkę wykonaną z wosku roślinnego lub ręcznie robioną świecę sojową polskiej marki SoyaStar.<br />
			Moja oferta obejmuje sześć rozmiarów świeczek:
			<ul class="content__list">
				<li class="list__item">S i M - klasyczne tealighty,</li>
				<li class="list__item">S w mini-słoiczku - świeczka sojowa 20g z wybranym zapachem,</li>
				<li class="list__item">L - świeczka w szklanym naczyniu (wosk roślinny - bezzapachowy lub sojowy 100g - zapachowy),</li>
				<li class="list__item">XL i XXL - świeczki bryłowe (bezzapachowe),</li>
				<li class="list__item">PREMIUM - świeczka sojowa 200g w szerokiej gamie zapachów (zobacz poniżej).</li>
			</ul>
			Zapachowe świece sojowe w ręcznie szydełkowanych koronkach - to wyjątkowe połączenie rękodzieła z elegancją i subtelnym zapachem.<br />
			Każda świeca z tej linii jest starannie dobrana do ręcznie wykonanej koronki, która nadaje jej unikatowy charakter. To idealny wybór na prezent lub jako stylowy dodatek do wnętrza.
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.home-intro {
		.intro__logo {
			display: block;
			width: min(350px, 70%);
			margin: 130px auto 0;
		}
		.intro__content {
			margin: 50px 0;
			font-style: italic;

			// text-align: center;
			@include decorative-bg;
			.content__list {
				padding-left: 30px;
				list-style-type: disc;
			}
		}
	}
</style>
