<script setup lang="ts">
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
	<AppSection title="Kontakt" class="home-contact">
		<p class="home-contact__description">
			Zapraszam do kontaktu poprzez <a href="https://www.facebook.com/profile.php?id=100089067432296" target="_blank">Facebooka</a>, <a href="https://www.instagram.com/koronkowe_swieczki" target="_blank">Instagrama</a>, lub formularz kontaktowy poniżej. Z niecierpliwością czekam na Twoją wiadomość!
		</p>
		<form class="home-contact__form" @submit.prevent="submitForm">
			<input v-model="formData.name" class="form__input" name="name" type="text" placeholder="Nazwa" />
			<input v-model="formData.email" class="form__input" name="email" type="text" placeholder="Email" />
			<textarea v-model="formData.content" class="form__textarea" rows="10" name="content" placeholder="Twoja wiadomość" />
			<button class="form__submit" type="submit">Wyślij</button>
		</form>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-contact {
		.home-contact__description {
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
		.home-contact__form {
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
</style>
