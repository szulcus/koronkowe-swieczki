import type { ModuleOptions } from 'nuxt-vuefire';

const vuefireOptions: ModuleOptions = {
	config: {
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: "koronkowe-swieczki.firebaseapp.com",
		projectId: "koronkowe-swieczki",
		storageBucket: "koronkowe-swieczki.firebasestorage.app",
		messagingSenderId: "15197099702",
		appId: "1:15197099702:web:1d32b87e553ebb2c303817",
		measurementId: "G-F863RX5BC0"
	},
	
};

export default vuefireOptions;
