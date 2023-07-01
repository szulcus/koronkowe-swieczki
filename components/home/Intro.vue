<script setup lang="ts">
	//
</script>

<template>
	<div class="home-intro">
		<img class="intro__logo" src="~/assets/images/logo.svg" alt="Koronkowe Świeczki Logo" />
		<p class="intro__content">
			Z miłością, pasją i sercem szydełkuję eleganckie, stylowe ubranka do świeczek. Wykonuję je z bawełny merceryzowanej. Można ich używać wielokrotnie. Do każdego stworzonego przeze mnie produktu dołączam świeczkę wykonaną z wosku roślinnego.
			<br /><br />
			Moja oferta obejmuje cztery rozmiary - S i M są bezzapachowe (przy większym zamówieniu, za dodatkową opłatą 3zł/szt. istnieje możliwość wyboru świeczki sojowej, zapachowej), L - o kojącym aromacie lasu i bursztynu z pikantnymi nutami cytrusów, natomiast XL to bezzapachowe świeczki bryłowe.
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
