<script setup lang="ts">
	import type { ApiOfferVariant } from '~/types';

	// Props
	interface Props {
		variant: ApiOfferVariant & {
			properties: Partial<ApiOfferVariant<'dimensions' | 'weight' | 'burningTime' | 'items' | 'equivalent'>['properties']>
		};
	}
	const props = defineProps<Props>();
</script>

<template>
	<div class="app-variant">
		<img class="app-variant__img" :src="props.variant.image" :alt="props.variant.name" />
		<div class="app-variant__info">
			<div class="info__name">{{ props.variant.name }}</div>
			<div class="info__price">
				<span v-if="props.variant.previousPrice" class="price__previous">{{ props.variant.previousPrice }}</span>
				{{ props.variant.price }}
			</div>
			<div class="info__properties">
				<div v-if="props.variant.properties.dimensions" class="properties__property">
					<icon name="fa6-solid:ruler" />
					{{ props.variant.properties.dimensions }}
				</div>
				<div v-if="props.variant.properties.weight" class="properties__property">
					<icon name="fa6-solid:scale-unbalanced" />
					{{ props.variant.properties.weight }}
				</div>
				<div v-if="props.variant.properties.burningTime" class="properties__property">
					<icon name="fa6-solid:fire" />
					{{ props.variant.properties.burningTime }}
				</div>
				<div v-if="props.variant.properties.items" class="properties__property">
					<icon name="fa6-solid:box" />
					{{ props.variant.properties.burningTime }}
				</div>
				<div v-if="props.variant.properties.equivalent" class="properties__property">
					<icon name="fa6-solid:arrow-up-right-from-square" />
					{{ props.variant.properties.equivalent }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.app-variant {
		display: flex;
		align-items: stretch;
		gap: 20px;
		&:not(:last-child) {
			margin-bottom: 20px;
		}
		.app-variant__img {
			width: 150px;
			border: 1px solid $text-secondary;
			aspect-ratio: 4 / 3;
			object-fit: cover;
		}
		.app-variant__info {
			.info__name {
				white-space: pre-line;
			}
			.info__price {
				font-size: 1.25rem;
				font-weight: bold;
				.price__previous {
					font-size: 1rem;
					text-decoration: line-through;
				}
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
			.info__description {
				margin-top: 10px;
				font-size: 14px;
			}
		}
	}
</style>
