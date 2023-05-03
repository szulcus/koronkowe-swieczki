<script setup lang="ts">
	//
</script>

<template>
	<div class="home-intro">
		<img class="intro__logo" src="~/assets/images/logo.svg" alt="Koronkowe Świeczki Logo" />
		<p class="intro__content">Ręcznie szydełkowane, eleganckie, stylowe ubranka. Tworzone z miłością, pasją i sercem. Wykonane z bawełny merceryzowanej. Można je używać wielokrotnie. Do każdego produktu dołączona jest świeczka wykonana z wosku roślinnego. Dostępne w trzech rozmiarach. S i M - bezzapachowe (za dopłatą 3 zł możliwość wyboru świeczki sojowej, zapachowej), L - kojące wonią lasu i bursztynu z pikantnymi nutami cytrusów.</p>
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
