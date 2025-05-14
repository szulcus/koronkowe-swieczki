import { EntityCollection } from '@firecms/core';

const homeCollection: EntityCollection = {
	id: 'home',
	name: 'Home',
	singularName: 'Home',
	path: 'home',
	editable: true,
	icon: 'fiber_smart_record',
	group: 'Views',
	customId: true,
	properties: {
		intro: {
			dataType: 'map',
			name: 'Intro',
			properties: {
				logo: {
					validation: {
						required: true,
					},
					dataType: 'string',
					storage: {
						storeUrl: true,
						storagePath: '/',
						acceptedFiles: [
							'image/*',
						],
					},
					name: 'Logo',
				},
				content: {
					name: 'Content',
					dataType: 'string',
					validation: {
						required: true,
					},
					markdown: true,
				},
			},
		},
		offer: {
			name: 'Offer',
			properties: {
				title: {
					dataType: 'string',
					name: 'Title',
				},
				description: {
					dataType: 'string',
					name: 'Description',
					markdown: true,
				},
				footnote: {
					dataType: 'string',
					name: 'Footnote',
				},
				sizes: {
					dataType: 'string',
					name: 'Sizes',
					properties: {
						products: {
							dataType: 'array',
							of: {
								name: '',
								properties: {
									details: {
										name: 'Details',
										dataType: 'map',
										properties: {
											price: {
												name: 'price',
												dataType: 'string',
											},
											name: {
												name: 'name',
												dataType: 'string',
											},
											properties: {
												dataType: 'map',
												name: 'Properties',
												keyValue: true,
											},
										},
									},
									image: {
										storage: {
											storagePath: '/',
										},
										name: 'Image',
										dataType: 'string',
									},
									properties: {
										name: 'Properties',
										dataType: 'map',
										keyValue: true,
									},
								},
								dataType: 'map',
							},
							name: 'Products',
						},
						title: {
							name: 'Title',
							dataType: 'string',
						},
					},
				},
				sets: {
					properties: {
						products: {
							dataType: 'array',
							of: {
								properties: {
									properties: {
										dataType: 'map',
										name: 'Properties',
										properties: {
											burning_time: {
												dataType: 'string',
												name: 'Burning time',
											},
											dimensions: {
												dataType: 'string',
												name: 'Dimensions',
											},
										},
									},
									price: {
										name: 'Price',
										dataType: 'string',
									},
									details: {
										dataType: 'map',
										name: 'Details',
										properties: {
											price: {
												dataType: 'string',
												name: 'Price',
											},
											name: {
												name: 'Name',
												dataType: 'string',
											},
										},
									},
									image: {
										name: 'Image',
										dataType: 'string',
										storage: {
											storagePath: '/',
										},
									},
									name: {
										name: 'Name',
										dataType: 'string',
									},
								},
								name: '',
								dataType: 'map',
							},
							name: 'Products',
						},
						title: {
							dataType: 'string',
							name: 'Title',
						},
					},
					name: 'Sets',
					dataType: 'string',
				},
			},
			dataType: 'map',
		},
		offer_sizes: {
			of: {
				dataType: 'map',
				name: '',
				properties: {
					price: {
						name: 'Price',
						dataType: 'string',
					},
					image: {
						storage: {
							storagePath: '/offer/sizes',
							storeUrl: true,
						},
						name: 'Image',
						dataType: 'string',
					},
					properties: {
						dataType: 'map',
						name: 'Properties',
						properties: {
							dimensions: {
								dataType: 'string',
								name: 'Dimensions',
							},
							burning_time: {
								dataType: 'string',
								name: 'Burning time',
							},
						},
					},
					name: {
						dataType: 'string',
						name: 'Name',
					},
				},
			},
			name: 'Offer (sizes)',
			properties: {
				title: {
					name: 'Title',
					dataType: 'string',
				},
				products: {
					name: 'Products',
					dataType: 'array',
					of: {
						properties: {
							properties: {
								name: 'Properties',
								properties: {
									dimensions: {
										validation: {
											required: true,
										},
										dataType: 'string',
										name: 'Dimensions',
									},
									burning_time: {
										dataType: 'string',
										name: 'Burning time',
										validation: {
											required: true,
										},
									},
								},
								dataType: 'map',
							},
							name: {
								validation: {
									required: true,
								},
								name: 'Name',
								dataType: 'string',
							},
							price: {
								dataType: 'string',
								validation: {
									required: true,
								},
								name: 'Price',
							},
							image: {
								storage: {
									storagePath: '/offer/sizes',
									acceptedFiles: [
										'image/*',
									],
									storeUrl: true,
								},
								dataType: 'string',
								name: 'Image',
							},
						},
						name: '',
						dataType: 'map',
					},
				},
			},
			dataType: 'array',
		},
		offer_sets: {
			properties: {
				title: {
					name: 'Title',
					dataType: 'string',
				},
				products: {
					of: {
						dataType: 'map',
						properties: {
							image: {
								dataType: 'string',
								name: 'Image',
								validation: {
									required: true,
								},
								storage: {
									storeUrl: true,
									acceptedFiles: [
										'image/*',
									],
									storagePath: '/offer/sets',
								},
							},
							name: {
								dataType: 'string',
								name: 'Name',
							},
							price: {
								name: 'Price',
								dataType: 'string',
							},
							properties: {
								name: 'Properties',
								dataType: 'map',
								properties: {
									items: {
										name: 'Items',
										dataType: 'string',
									},
								},
							},
						},
						name: '',
					},
					name: 'Products',
					dataType: 'array',
				},
			},
			of: {
				dataType: 'map',
				name: '',
				properties: {
					price: {
						validation: {
							required: true,
						},
						name: 'Price',
						dataType: 'string',
					},
					image: {
						name: 'Image',
						storage: {
							acceptedFiles: [
								'image/*',
							],
							storeUrl: true,
							storagePath: '/offer/sets',
						},
						dataType: 'string',
					},
					name: {
						dataType: 'string',
						name: 'Name',
						validation: {
							required: true,
						},
					},
					properties: {
						name: 'Properties',
						properties: {
							items: {
								name: 'Items',
								dataType: 'string',
								validation: {
									required: true,
								},
							},
						},
						dataType: 'map',
					},
				},
			},
			name: 'Offer (sets)',
			dataType: 'array',
		},
		special_offer: {
			name: 'Special offer',
			dataType: 'reference',
			path: 'special_offers',
		},
		kashubian_offer: {
			properties: {
				title: {
					dataType: 'string',
					name: 'Title',
				},
				description: {
					name: 'Description',
					markdown: true,
					dataType: 'string',
				},
				sizes: {
					name: 'Sizes',
					validation: {
						required: true,
					},
					dataType: 'string',
				},
				sets: {
					dataType: 'string',
					validation: {
						required: true,
					},
					name: 'Sets',
				},
			},
			dataType: 'map',
			name: 'Kashubian offer',
		},
		kashubian_offer_sizes: {
			hideFromCollection: true,
			description: 'Rozmiary w Edycji Kaszubskiej',
			name: 'Kashubian offer (sizes)',
			dataType: 'array',
			of: {
				properties: {
					image: {
						dataType: 'string',
						name: 'Image',
						storage: {
							storagePath: '/kashubian-offer/sizes',
							storeUrl: true,
						},
					},
					name: {
						description: 'Nazwa produktu',
						dataType: 'string',
						name: 'Name',
					},
					price: {
						validation: {
							required: true,
						},
						dataType: 'string',
						name: 'Price',
					},
					properties: {
						dataType: 'map',
						properties: {
							burning_time: {
								dataType: 'string',
								name: 'Burning time',
								validation: {
									required: true,
								},
							},
							dimensions: {
								name: 'Dimensions',
								validation: {
									required: true,
								},
								dataType: 'string',
							},
						},
						name: 'Properties',
					},
					previous_price: {
						name: 'Previous price',
						dataType: 'string',
					},
				},
				name: '',
				dataType: 'map',
			},
		},
		kashubian_offer_sets: {
			of: {
				name: '',
				properties: {
					price: {
						name: 'Price',
						dataType: 'string',
					},
					properties: {
						dataType: 'map',
						properties: {
							items: {
								name: 'Items',
								validation: {
									required: true,
								},
								dataType: 'string',
							},
						},
						name: 'Properties',
					},
					previous_price: {
						dataType: 'string',
						name: 'Previous price',
					},
					name: {
						dataType: 'string',
						name: 'Name',
						validation: {
							required: true,
						},
					},
					image: {
						name: 'Image',
						dataType: 'string',
						storage: {
							storeUrl: true,
							acceptedFiles: [
								'image/*',
							],
							storagePath: '/kashubian-offer/sizes',
						},
					},
				},
				dataType: 'map',
			},
			dataType: 'array',
			description: 'Zestawy w Edycji Kaszubskiej',
			name: 'Kashubian offer (sets)',
			hideFromCollection: true,
		},
		scented_offer: {
			name: 'Scented offer',
			dataType: 'map',
			properties: {
				title: {
					validation: {
						required: true,
					},
					dataType: 'string',
					name: 'Title',
				},
				description: {
					name: 'Description',
					markdown: true,
					dataType: 'string',
					validation: {
						required: true,
					},
				},
				sizes: {
					validation: {
						required: true,
					},
					name: 'Sizes',
					dataType: 'string',
				},
				colors: {
					name: 'Colors',
					validation: {
						required: true,
					},
					dataType: 'string',
				},
			},
		},
		scented_offer_sizes: {
			name: 'Scented offer (sizes)',
			dataType: 'array',
			hideFromCollection: true,
			of: {
				name: '',
				dataType: 'map',
				properties: {
					name: {
						name: 'Name',
						dataType: 'string',
						validation: {
							required: true,
						},
					},
					properties: {
						properties: {
							dimensions: {
								dataType: 'string',
								name: 'Dimensions',
							},
							weight: {
								name: 'Weight',
								dataType: 'string',
							},
							burning_time: {
								name: 'Burning time',
								dataType: 'string',
							},
						},
						name: 'Properties',
						dataType: 'map',
					},
					image: {
						storage: {
							storeUrl: true,
							acceptedFiles: [
								'image/*',
							],
							storagePath: '/scented-offer/sizes',
						},
						name: 'Image',
						dataType: 'string',
					},
					price: {
						name: 'Price',
						validation: {
							required: true,
						},
						dataType: 'string',
					},
				},
			},
		},
		colors: {
			of: {
				properties: {
					id: {
						dataType: 'string',
						name: 'Id',
						validation: {
							required: true,
						},
					},
					available: {
						dataType: 'boolean',
						name: 'Available',
						validation: {
							required: true,
						},
					},
					smell: {
						dataType: 'string',
						name: 'Smell',
					},
					name: {
						name: 'Name',
						validation: {
							required: true,
						},
						dataType: 'string',
					},
					color: {
						name: 'Color',
						validation: {
							required: true,
						},
						dataType: 'string',
					},
					custom_name: {
						dataType: 'string',
						name: 'Custom name',
					},
				},
				dataType: 'map',
				name: '',
			},
			dataType: 'array',
			name: 'Colors',
			hideFromCollection: true,
		},
		safety: {
			name: 'Safety',
			properties: {
				title: {
					validation: {
						required: true,
					},
					dataType: 'string',
					name: 'Title',
				},
				description: {
					dataType: 'string',
					markdown: true,
					name: 'Description',
					validation: {
						required: true,
					},
				},
				content: {
					storage: {
						storagePath: '/',
					},
					name: 'Content',
					validation: {
						required: true,
					},
					dataType: 'string',
					markdown: true,
				},
			},
			dataType: 'map',
		},
		usage: {
			dataType: 'map',
			properties: {
				title: {
					name: 'Title',
					dataType: 'string',
					validation: {
						required: true,
					},
				},
				description: {
					markdown: true,
					name: 'Description',
					dataType: 'string',
					validation: {
						required: true,
					},
				},
				image: {
					dataType: 'string',
					storage: {
						acceptedFiles: [
							'image/*',
						],
						storagePath: '/summary',
						storeUrl: true,
					},
					name: 'Image',
				},
				summary: {
					name: 'Summary',
					validation: {
						required: true,
					},
					dataType: 'string',
					multiline: true,
				},
			},
			name: 'Usage',
		},
		contact: {
			properties: {
				title: {
					validation: {
						required: true,
					},
					dataType: 'string',
					name: 'Title',
				},
				description: {
					markdown: true,
					name: 'Description',
					dataType: 'string',
				},
				labels: {
					properties: {
						name: {
							dataType: 'string',
							name: 'Name',
							validation: {
								required: true,
							},
						},
						email: {
							name: 'Email',
							validation: {
								required: true,
							},
							dataType: 'string',
						},
						message: {
							dataType: 'string',
							name: 'Message',
							validation: {
								required: true,
							},
						},
						submit: {
							name: 'Submit',
							dataType: 'string',
							validation: {
								required: true,
							},
						},
					},
					name: 'Labels',
					dataType: 'map',
				},
			},
			dataType: 'map',
			name: 'Contact',
		},
	},
	subcollections: [],
}

export default homeCollection;
