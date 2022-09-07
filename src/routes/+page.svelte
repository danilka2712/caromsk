<script>
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Logo from '$lib/img/Logo.svg';
	import Car3 from '$lib/img/Avtomih.svg';
	import Crug from '$lib/img/crug.webp';

	import Icon from '@iconify/svelte';
	import Reviews from '../comp/Reviews.svelte';
	import About from '../comp/about.svelte';
	import Price from '../comp/price.svelte';
	import Faq from '../comp/Faq.svelte';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);
	import { open } from '../store';

	onMount(() => {
		gsap.to('.box', {
			scale: 1.02,

			scrollTrigger: {
				start: 20,
				end: 600,
				scrub: true
			}
		});
	});
</script>

{#if $open}
	<div
		
		class="bg-white fixed z-40 top-0 left-0 w-screen h-screen sm:hidden"
	>
		<div class=" relative h-full">
			<div class="p-5 flex justify-between items-center">
				<h1 class="text-2xl font-medium">Меню</h1>
				<button on:click={open.increment}>
					<Icon class="w-7 h-7" icon="icon-park:close-small" style="color: #364168;" />
				</button>
			</div>
			<div class="p-8 text-4xl absolute bottom-32 font-light gap-10 flex flex-col">
				<a on:click={open.increment} href="/">Главная</a>
				<a on:click={open.increment} href="evacuator">Эвакуатор</a>
				<a on:click={open.increment} href="autopsy">Вскрытие авто</a>
			</div>
		</div>
	</div>
{:else}
	<main >
		<div
			id="1"
			class="max-w-6xl relative  sm:px-6 mx-5 lg:mx-auto flex items-center mt-44 mb-72 sm:my-0 sm:h-[100vh]"
		>
			<img
				class="absolute w-fit sm:hidden -right-5 -bottom-80 object-cover z-10 "
				src={Car3}
				alt=""
			/>

			<div
				class="bg-[#F24347] box hidden sm:flex  items-center justify-center  rounded-full  sm:top-24 right-10 absolute  sm:w-64 sm:h-64"
			>
				<img class="z-0 w-56 absolute animate-spin" src={Crug} alt="" />

				<Icon
					class="w-6 h-6 z-10 sm:w-28  sm:h-28"
					icon="akar-icons:arrow-right"
					style="color: white;"
					rotate="90deg"
				/>
			</div>

			<div class="sm:mb-24 box hidden sm:flex flex-col box">
				<h1 class=" font-bold text-5xl sm:text-[100px] lg:text-[128px] leading-none m-0 text-stroke uppercase">
					ВЫЕЗДНАЯ
				</h1>
				<h1 class="sm:ml-28 font-bold sm:text-[100px] text-5xl lg:text-[128px] leading-none m-0 uppercase">
					ПРОВЕРКА
				</h1>
				<h1 class="sm:ml-12 font-bold sm:text-[100px] text-5xl lg:text-[128px] leading-none m-0 uppercase">
					автомобиля
				</h1>
			</div>
			<div class="sm:hidden ">
				<h1 class="text-5xl font-medium">Выездная диагностика автомобиля</h1>
				<p class="mt-3 text-lg">
					Выявим все скрытые дефекты<br /> последствия аварий, признаки работы<br /> в такси, скрученный
					пробег.
				</p>
			</div>
		</div>
		<Price />
		<About />
		<Reviews />
		<Faq />
	</main>
	<footer  class="bg-[#F5F5F5]  sm:h-[25vh]">
		<div class="max-w-7xl sm:py-0 py-12 mx-5 flex justify-between sm:mx-auto sm:pt-16">
			<img class="w-48" src={Logo} alt="" />
			<div class="flex flex-col items-end">
				<div class="flex gap-7 mb-7">
					<a href="http://">
						<Icon class="w-7 h-7" icon="akar-icons:whatsapp-fill" style="color: #364168;" />
					</a>
					<a href="http://">
						<Icon class="w-7 h-7" icon="akar-icons:telegram-fill" style="color: #364168;" />
					</a>
				</div>

				<a href="tel:+79081197279">+7 (908) 119 72-79</a>
			</div>
		</div>
	</footer>
{/if}
