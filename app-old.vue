<script setup lang="ts">
	import { ApiCandle, Database } from '~/types';

	const candles = ref<(ApiCandle & { variantsCount: number })[] | null>(null);
	onMounted(async () => {
		const supabase = useSupabaseClient<Database>();
		const { data: candlesData } = await supabase.from('candles').select('*');
		if (!candlesData) return;
		candles.value = await Promise.all(candlesData?.map(async (candle) => {
			const { count: candleVariantsCount } = await supabase.from('candle-variants').select('*', { count: 'exact', head: true }).eq('candleUuid', candle.uuid);
			return { ...candle, variantsCount: candleVariantsCount ?? 0 };
		}));
		const { count: candleVariantsCount } = await supabase.from('candle-variants').select('*', { count: 'exact', head: true }).eq('candleUuid', candlesData[1].uuid);
		console.log(candleVariantsCount);
	});
</script>

<template>
	<TheHeader />
	<h1 class="app__title">Oferta</h1>
	<div class="app__content">
		<div
			v-for="candle in candles"
			:key="candle.uuid"
			class="content__card"
		>
			<div class="card__variants">{{ variantPluralization(candle.variantsCount) }}</div>
			<img
				v-if="candle.image"
				:src="candle.image"
				:alt="candle.name"
				class="card__image"
			/>
			<h2 class="card__name">{{ candle.name }}</h2>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.app__title {
		font-size: 1.5rem;
		text-align: center;
	}
	.app__content {
		width: min(1000px, 100%);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		.content__card {
			position: relative;
			background-color: $bg-secondary;
			border-radius: 10px;
			overflow: hidden;
			.card__variants {
				position: absolute;
				top: 5px;
				right: 5px;
				font-size: 10px;
				font-weight: 600;
				background-color: $bg-primary;
				padding: 0 3px;
				border-radius: 3px;
			}
			.card__name {
				font-size: 0.875rem;
				text-align: center;
				margin: 5px 0;
			}
			.card__image {
				width: 100%;
				aspect-ratio: 4/3;
				object-fit: cover;
				margin: 0 auto;
			}
		}
	}
</style>
