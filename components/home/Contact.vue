<script setup lang="ts">
const rootStore = useRootStore();
</script>

<template>
	<AppSection v-if="rootStore.homeData" title="Kontakt" class="home-contact">
		<MDC :value="rootStore.homeData.contact.description" />
		<client-only>
			<HomeContactForm />
		</client-only>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-contact {
		&:deep(p) {
			margin-top: 20px;
			margin-bottom: 10px;
			text-align: center;
		}
	}
</style>
