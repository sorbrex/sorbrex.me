<script lang="ts">
	import type { RemoteInfo } from '../../../routes/+page.server';

	export let data: { info: RemoteInfo };

	const diffCalc = () => {
		const diff =
			(new Date().getTime() - new Date('March 29, 1999').getTime()) / 1000 / 60 / 60 / 24 / 365;
		return diff.toFixed(9);
	};

	let age = diffCalc();

	setInterval(() => {
		age = diffCalc();
	}, 10);

	$: currentAge = age;
</script>

<section class="flex flex-col p-2 mt-10">
	<h1 class="text-3xl font-bold text-titleColor">More</h1>

	<div class="flex flex-col items-center justify-center mt-5 p-2">
		<div
			id="Spotify"
			class="bg-cardBackground rounded-lg w-full h-[100px] p-5 mb-2 flex flex-row justify-between"
		>
			<div id="Play_Count" class="flex flex-col items-start justify-center">
				<h1 class="text-xl sm:text-2xl font-bold text-subtitleColor">
					{data.info.musicUserInfoObject.name}
				</h1>
				<p class="text-xs sm:text-base text-paragraphColor">
					Play Count:{data.info.musicUserInfoObject.playcount}
				</p>
			</div>

			<div id="Recent_Track" class="flex flex-row items-center justify-end">
				<div id="Recent_Desc" class="flex flex-col justify-center items-end mx-2">
					<h1 class="sm:text-xl font-bold text-subtitleColor">{data.info.recentTrack.track}</h1>
					<p class="text-xs sm:text-base text-paragraphColor">{data.info.recentTrack.artist}</p>
				</div>

				<div id="Recent_Image" class="h-[75px] w-[75px]">
					<a href={data.info.recentTrack.url} target="_blank">
						<img src={data.info.recentTrack.image} alt="Album Cover" class="rounded-lg" />
					</a>
				</div>
			</div>
		</div>

		<div id="TimeInfo" class="flex flex-row justify-between w-full mb-2">
			<div
				id="Age"
				class="bg-cardBackground flex flex-col items-start justify-center rounded-lg w-1/2 h-[100px] p-5 mr-1"
			>
				<h1 class="text-xl sm:text-2xl font-bold text-subtitleColor">Age</h1>
				<p class="text-xs sm:text-base text-paragraphColor">{currentAge}</p>
			</div>

			<div
				id="Coding_Time"
				class="bg-cardBackground flex flex-col items-end justify-center rounded-lg w-1/2 h-[100px] p-5 ml-1"
			>
				<h1 class="text-xl sm:text-2xl font-bold text-subtitleColor">Coding Time</h1>
				<p class="text-xs sm:text-base text-paragraphColor">
					{data.info.codingTimeObject.totalTime}
				</p>
			</div>
		</div>

		<div
			id="Link"
			class="bg-cardBackground rounded-lg w-full sm:h-[100px] p-5 mb-2 flex flex-col sm:flex-row justify-between"
		>
			<div class="flex flex-col items-start justify-between sm:w-1/2">
				<div class="flex flex-row items-center justify-start my-1">
					<img
						src="https://cdn.simpleicons.org/github/lightgray"
						alt="GitHub"
						class="w-5 h-5 mr-2"
					/>
					<a href="https://github.com/sorbrex" target="_blank" class="decoration-0">
						<p class="inline text-titleColor">GitHub</p>
						<p class="inline">//</p>
						<p class="inline text-titleColor">@Sorbrex</p>
					</a>
				</div>

				<div class="flex flex-row items-center justify-start my-1">
					<img
						src="https://cdn.simpleicons.org/startpage/lightgray"
						alt="LinkedIn"
						class="w-5 h-5 mr-2"
					/>
					<a
						href="https://www.linkedin.com/in/sorbellonando/"
						target="_blank"
						class="text-paragraphColor decoration-0"
					>
						<p class="inline text-titleColor">LinkedIn</p>
						<p class="inline">//</p>
						<p class="inline text-titleColor">Nando Sorbello</p>
					</a>
				</div>
			</div>

			<div class="flex flex-col items-start justify-between sm:w-1/2">
				<div class="flex flex-row items-center justify-start my-1">
					<img
						src="https://cdn.simpleicons.org/maildotru/lightgray"
						alt="E-Mail"
						class="w-5 h-5 mr-2"
					/>
					<a href="mailto:nandosorbello.dev@gmail.com" target="_blank" class="decoration-0">
						<p class="inline text-titleColor">E-Mail</p>
						<p class="inline">//</p>
						<p class="inline text-titleColor">nandosorbello.dev@gmail.com</p>
					</a>
				</div>

				<div class="flex flex-row items-center justify-start my-1">
					<img
						src="https://cdn.simpleicons.org/instagram/lightgray"
						alt="Instagram"
						class="w-5 h-5 mr-2"
					/>
					<a
						href="https://www.instagram.com/sorbrex.ns/"
						target="_blank"
						class="text-paragraphColor decoration-0"
					>
						<p class="inline text-titleColor">Instagram</p>
						<p class="inline">//</p>
						<p class="inline text-titleColor">@sorbrex.ns</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
