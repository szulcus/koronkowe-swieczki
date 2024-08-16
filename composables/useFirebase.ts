import { getAnalytics } from 'firebase/analytics';
import { useFirebaseApp } from 'vuefire';

export default () => {
	const firebaseApp = useFirebaseApp();
	const analytics = getAnalytics(firebaseApp);

	return {
		analytics,
	};
};
