import { EntityCollection } from '@firecms/core';

const specialOffersCollection: EntityCollection = {
	id: 'special_offers',
	name: 'Special offers',
	singularName: 'Special offer',
	path: 'special_offers',
	editable: true,
	icon: 'category',
	group: 'Views',
	customId: true,
	properties: {
		name: {
			name: 'Name',
			dataType: 'string',
		},
		variants: {
			of: {
				properties: {
					image: {
						name: 'Image',
						dataType: 'string',
						storage: {
							storagePath: '/special-offer',
							storeUrl: true,
						},
					},
					active: {
						dataType: 'boolean',
						defaultValue: true,
						name: 'Active',
					},
					price: {
						name: 'Price',
						dataType: 'string',
						validation: {
							required: true,
						},
					},
					properties: {
						name: 'Properties',
						dataType: 'map',
						properties: {
							equivalent: {
								name: 'Equivalent',
								dataType: 'string',
							},
						},
					},
					name: {
						name: 'Name',
						dataType: 'string',
						validation: {
							required: true,
						},
					},
					description: {
						dataType: 'string',
						name: 'Description',
						validation: {
							required: true,
						},
					},
				},
				dataType: 'map',
				name: '',
			},
			name: 'Variants',
			validation: {
				required: true,
			},
			dataType: 'array',
		},
	},
	subcollections: [],
}

export default specialOffersCollection;
