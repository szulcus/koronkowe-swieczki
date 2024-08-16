<script setup lang="ts">
	import { logEvent } from '@firebase/analytics';

	// Composables
	const { analytics } = useFirebase();

	// Form
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
			logEvent(analytics, 'form_sent', { ...formData.value });
			alert('Dziękuję!');
			formData.value = {
				name: '',
				email: '',
				content: '',
			};
		}
		catch (err) {
			console.error('Error:', err);
			logEvent(analytics, 'form_error', { ...formData.value });
		}
	};
</script>

<template>
	<form class="contact-form" @submit.prevent="submitForm">
		<input v-model="formData.name" class="form__input" required name="name" type="text" placeholder="Nazwa" />
		<input v-model="formData.email" class="form__input" required name="email" type="email" placeholder="Email" />
		<textarea v-model="formData.content" class="form__textarea" required rows="10" name="content" placeholder="Twoja wiadomość" />
		<button class="form__submit" type="submit">Wyślij</button>
	</form>
</template>

<style lang="scss" scoped>
	.contact-form {
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
</style>
