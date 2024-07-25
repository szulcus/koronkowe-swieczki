<script setup lang="ts">
	//
</script>

<template>
	<div class="home-intro">
		<img class="intro__logo" src="~/assets/images/logo.svg" alt="Koronkowe Świeczki Logo" />
		<p class="intro__content">
			Z miłością, pasją i sercem szydełkuję eleganckie, stylowe ubranka do świeczek. Wykonuję je z bawełny merceryzowanej. Można ich używać wielokrotnie. Do każdego stworzonego przeze mnie produktu dołączam świeczkę wykonaną z wosku roślinnego lub ręcznie robioną świeczkę zapachową sojową.
			<br /><br />
			Moja oferta obejmuje sześć rozmiarów: S i M - to tealight'y (również sojowe, zapachowe). S - dostępny także w mini-słoiczku (sojowa, zapach do wyboru), L - w szklanym naczyniu (wosk roślinny lub sojowy), natomiast XL i XXL to świeczki bryłowe (bezzapachowe). PREMIUM - to moja perełka, świeczka sojowa w szerokiej gamie zapachowej (patrz poniżej).
		</p>
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
			text-align: center;
			@include decorative-bg;
		}
	}
</style>
