const resolutions = {
	s: '300x300',
};
const getSetImage = (path?: string, resolution?: 's') => {
	if (!path) return;
	const imgPath = resolution ? `${path.split('.')[0]}_${resolutions[resolution]}.${path.split('.')[1]}` : path;
	// return `https://storage.googleapis.com/koronkowe-swieczki.appspot.com/${encodeURI(imgPath)}`;
	return `https://firebasestorage.googleapis.com/v0/b/koronkowe-swieczki.firebasestorage.app/o/${encodeURIComponent(imgPath)}?alt=media`
};

export default getSetImage;
