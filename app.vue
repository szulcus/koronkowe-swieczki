<script setup lang="ts">
	import content from '~/assets/data/content';

	const formData = ref<{ name: string; email: string; content: string }>({
		name: '',
		email: '',
		content: '',
	});

	const submitForm = async () => {
		try {
			await fetch('https://submit-form.com/i4o2jBHS', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(formData.value),
			});
			alert('Dziękujemy!');
		}
		catch (err) {
			console.error('Error:', err);
		}
	};
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
			<form class="section__form" @submit.prevent="submitForm">
				<input v-model="formData.name" class="form__input" name="name" type="text" placeholder="Nazwa" />
				<input v-model="formData.email" class="form__input" name="email" type="text" placeholder="Email" />
				<textarea v-model="formData.content" class="form__textarea" rows="10" name="content" placeholder="Twoja wiadomość" />
				<button class="form__submit" type="submit">Wyślij</button>
			</form>
		</section>
	</main>
	<TheFooter />
</template>

<style scoped lang="scss">
	.app {
		width: min(1000px, 100%);
		padding: 20px;
		margin: 0 auto;
		.app__logo {
			display: block;
			width: min(350px, 70%);
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
				font-size: 2rem;
				text-align: center;
			}
		}
		.app__section--offer {
			.section__price-list {
				display: flex;
				flex-direction: column;
				margin-top: 20px;
				gap: 40px;
				@media (min-width: 900px) {
					flex-direction: row;
				}
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
							// .info__name {}
							.info__price {
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
				.form__input,
				.form__textarea {
					width: 100%;
					padding: 10px;
					border: none;
					border: 2px solid $text-secondary;
					background-color: $bg-secondary;
					font-size: 14px;
					outline: none;
					transition: 0.2s ease;
					&:focus {
						border-color: $text-primary;
					}
				}
				.form__textarea {
					grid-column: 1 / 3;
					resize: none;
				}
				.form__submit {
					padding: 10px;
					background-color: $text-secondary;
					color: $bg-primary;
					grid-column: 1 / 3;
					transition: 0.2s ease;
					@include hover {
						background-color: $text-primary;
					}
				}
			}
		}
	}
</style>
