import type { PageServerLoad } from './$types';
import { SECRET_API_KEY } from '$env/static/private'

export const load: PageServerLoad = async () => {
	console.log(SECRET_API_KEY);
	const codingTimeFetch = await fetch('https://wakatime.com/share/@018ce63a-a599-4c56-a343-8e97cb133a35/d25a9350-8307-4437-9c46-cd110fd70967.json');
	const data = (await codingTimeFetch.json()).data;
	return {
		info: {
			codingTimeObject: data,
			secretApi: SECRET_API_KEY,
		},
	};
};