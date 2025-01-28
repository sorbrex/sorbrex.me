import type { PageServerLoad } from './$types';
import { SECRET_API_KEY } from '$env/static/private'

export type RemoteInfo = {
	codingTimeObject: {
		totalTime: string,
	},
	musicUserInfoObject: {
		name: string,
		playcount: string,
	},
	recentTrack: {
		artist: string,
		track: string,
		image: string,
		url: string,
	}

}

export const load: PageServerLoad = async () => {
	const codingTimeFetch = await fetch('https://wakatime.com/share/@018ce63a-a599-4c56-a343-8e97cb133a35/d25a9350-8307-4437-9c46-cd110fd70967.json');
	const musicUserInfoFetch = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=Sorbrex&api_key=${SECRET_API_KEY}&format=json`)
	const recentTracksFetch = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Sorbrex&api_key=${SECRET_API_KEY}&limit=1&format=json`)

	const codingInformation = (await codingTimeFetch.json()).data;
	const musicUserInformation = (await musicUserInfoFetch.json()).user;
	const recentTracks = (await recentTracksFetch.json()).recenttracks.track[0];

	return {
		info: {
			codingTimeObject: {
				totalTime: codingInformation?.grand_total.human_readable_total_including_other_language,
			},
			musicUserInfoObject: {
				name: musicUserInformation?.name,
				playcount: musicUserInformation?.playcount,
			},
			recentTrack: {
				artist: recentTracks.artist['#text'],
				track: recentTracks.name,
				image: recentTracks.image[3]['#text'],
				url: recentTracks.url,
			},
		} as RemoteInfo,
	};
};