import { GOOGLE_API_KEY } from "@env";

export function getMapPreview(lat, long) {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;

	return imagePreviewUrl;
}

export async function getAdress(lat, lng) {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Something went wrong");
	}

	const data = await response.json();
	if (!data.results) {
		throw new Error("Something went wrong");
	}

	const address = data.results[0].formatted_address;
	return address;
}
