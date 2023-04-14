<script setup lang="ts">
	import content from '~/assets/data/content';
</script>

<template>
	<TheHeader />
	<main class="app">
		<img class="app__logo" src="~/assets/images/logo.svg" alt="Koronkowe Świeczki Logo" />
		<p class="app__intro">{{ content.intro }}</p>
		<section class="app__section app__section--offer">
			<h2 class="section__title">{{ content.offer.title }}</h2>
			<div class="section__price-list">
				<div class="price-list__part">
					<h3 class="part__title">{{ content.offer.sizes.title }}</h3>
					<div
						v-for="sizeVariant in content.offer.sizes.variants"
						:key="sizeVariant.name"
						class="part__variant"
					>
						<img class="variant__img" :src="sizeVariant.img" :alt="sizeVariant.name" />
						<div class="variant__info">
							<div class="info__name">{{ sizeVariant.name }}</div>
							<div class="info__price">{{ sizeVariant.price }}</div>
							<div class="info__properties">
								<div class="properties__property">
									<icon name="fa6-solid:fire" />
									{{ sizeVariant.properties.burningTime }}
								</div>
								<div class="properties__property">
									<icon name="fa6-solid:ruler" />
									{{ sizeVariant.properties.dimensions }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="price-list__part">
					<h3 class="part__title">{{ content.offer.sets.title }}</h3>
					<div
						v-for="setVariant in content.offer.sets.variants"
						:key="setVariant.name"
						class="part__variant"
					>
						<img class="variant__img" :src="setVariant.img" :alt="setVariant.name" />
						<div class="variant__info">
							<div class="info__name">{{ setVariant.name }}</div>
							<div class="info__price">{{ setVariant.price }}</div>
							<div class="info__properties">
								<div class="properties__property">
									<icon name="fa6-solid:box" />
									{{ setVariant.properties.items }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="app__section app__section--colors">
			<h2 class="section__title">{{ content.colors.title }}</h2>
			<ul class="section__grid">
				<li
					v-for="colorVariant in content.colors.variants.filter((color) => color.available)"
					:key="colorVariant.id"
					class="grid__item"
				>
					<div class="item__sample" :style="{ '--bg': colorVariant.color }" />
					{{ colorVariant.customName ?? colorVariant.name }}
				</li>
			</ul>
			<div class="section__warning">* {{ content.colors.warning }}</div>
		</section>
		<section class="app__section app__section--usage">
			<h2 class="section__title">{{ content.usage.title }}</h2>
			<p class="section__description" v-html="content.usage.description" />
		</section>
		<section class="app__section app__section--contact">
			<h2 class="section__title">{{ content.contact.title }}</h2>
			<p class="section__description" v-html="content.contact.description" />
			<form class="section__form" action="">
				<div class="form__item">
					<input class="item__input" name="name" type="text" placeholder="Nazwa" />
				</div>
				<div class="form__item">
					<input class="item__input" name="email" type="text" placeholder="Email" />
				</div>
				<div class="form__item">
					<textarea class="item__textarea" rows="10" name="content" placeholder="Twoja wiadomość" />
				</div>
			</form>
		</section>
	</main>
	<TheFooter />
</template>

<style scoped lang="scss">
	.app__title {
		font-size: 1.5rem;
		text-align: center;
	}
	.app {
		width: min(1000px, 100%);
		margin: 0 auto;
		.app__logo {
			display: block;
			width: 350px;
			margin: 130px auto 0;
		}
		.app__intro {
			margin: 50px 0;
			font-style: italic;
			text-align: center;
			@include decorative-bg;
		}
		.app__section {
			margin: 40px 0;
			.section__title {
				// position: relative;
				font-size: 2rem;
				text-align: center;

				// &::after {
				// 	position: absolute;
				// 	bottom: 0;
				// 	left: 50%;
				// 	width: 150px;
				// 	height: 2px;
				// 	background-color: $decorative;
				// 	content: '';
				// 	transform: translateX(-50%);
				// }
			}
		}
		.app__section--offer {
			.section__price-list {
				display: flex;
				margin-top: 20px;
				gap: 40px;
				.price-list__part {
					flex: 1;
					@include decorative-bg;
					.part__title {
						margin-bottom: 10px;
						font-size: 1.125rem;
						text-align: center;
						text-transform: uppercase;
					}
					.part__variant {
						display: flex;
						align-items: stretch;
						gap: 10px;
						&:not(:last-child) {
							margin-bottom: 10px;
						}
						.variant__img {
							width: 150px;
							border: 2px dashed $text-secondary;
							border-radius: 10px;
							aspect-ratio: 4 / 3;
							object-fit: cover;
						}
						.variant__info {
							display: flex;
							flex-direction: column;
							.info__name {
								// font-size: 0.875rem;
								// font-weight: bold;
							}
							.info__price {
								flex: 1 0 0;
								margin-bottom: auto;
								font-size: 1.25rem;
								font-weight: bold;
							}
							.info__properties {
								.properties__property {
									display: flex;
									align-items: center;
									font-size: 12px;
									font-weight: bold;
									gap: 5px;
								}
							}
						}
					}
				}
			}
		}
		.app__section--colors {
			.section__grid {
				display: grid;
				margin-top: 20px;
				gap: 10px;
				grid-template-columns: repeat(4, 1fr);
				@include decorative-bg;
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
		.app__section--usage {
			.section__description {
				margin-top: 20px;
				text-align: center;
				white-space: pre-line;
				@include decorative-bg;
			}
		}
		.app__section--contact {
			.section__description {
				margin-top: 20px;
				margin-bottom: 10px;
				text-align: center;
				&:deep(a) {
					text-decoration: underline;
					@include hover {
						text-decoration: none;
					}
				}
			}
			.section__form {
				display: grid;
				gap: 10px;
				grid-template-columns: repeat(2, 1fr);
				.form__item {
					position: relative;
					&::after {
						position: absolute;
						box-shadow:  0 0 0 1px inset $text-secondary;
						content: "";
						inset: 0;
						pointer-events: none;

						// transform: translate(2.5px, -2.5px);
						transition: 0.2s ease;
					}
					&:nth-child(3) {
						grid-column: 1 / 3;
					}
					&:focus-within {
						&::after {
							box-shadow:  0 0 0 1px inset $text-primary;
							transform: translate(0, 0);
						}
					}
					.item__input,
					.item__textarea {
						width: 100%;
						padding: 10px;
						border: none;
						background-color: $bg-secondary;
						font-size: 14px;
						outline: none;

					}

					// .item__input {
					// }
					.item__textarea {
						width: 100%;
						background-color: $bg-secondary;
						resize: none;
					}
				}
			}
		}
	}
</style>
