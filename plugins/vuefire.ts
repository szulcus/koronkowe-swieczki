import { defineNuxtPlugin } from '#app'
import { globalFirestoreOptions, firestoreDefaultConverter } from 'vuefire'
import * as changeKeys from 'change-case/keys'
import { camelCase } from 'change-case'

function camelCaseObject(obj: Record<string, any>): Record<string, any> {
	const result: Record<string, any> = {}

	for (const key in obj) {
		const val = obj[key]

		// Nie ruszaj DocumentReference i innych typów Firebase
		const shouldSkip =
		typeof val === 'object' &&
		val !== null &&
		('_key' in val || '_firestore' in val || 'firestore' in val)

		result[camelCase(key)] = shouldSkip ? val : changeKeys.camelCase(val, Infinity)
	}

	return result
}
export default defineNuxtPlugin(() => {
	globalFirestoreOptions.converter = {
		toFirestore: firestoreDefaultConverter.toFirestore,
		fromFirestore: (snapshot, options) => {
			const data = firestoreDefaultConverter.fromFirestore(snapshot, options)
			if (!data) return null
			return camelCaseObject({ ...data, id: snapshot.id });
		},
	};
});
