<script>
	import Logo from '$lib/img/Logo.svg';
	import Icon from '@iconify/svelte';
	import Reviews from '../comp/Reviews.svelte';
	import About from '../comp/about.svelte';
	import Price from '../comp/price.svelte';
	import Faq from '../comp/Faq.svelte';
</script>

<header class=" max-w-7xl items-center mx-5 sm:mx-auto mt-8 flex justify-between">
	<div>
		<img class="w-48" src={Logo} alt="" />
	</div>
	<div class="gap-7 hidden sm:flex items-center">
		<a href="/">О нас</a>
		<a href="/">Эвакуатор</a>
		<a href="/">Вскрытие автомобиля</a>
	</div>
	<div class="gap-7 hidden sm:flex items-center">
		<a href="/">+ 7 (908) 119 72-79</a>
		<Icon class="w-7 h-7" icon="akar-icons:whatsapp-fill" style="color: #364168;" />
		<Icon class="w-7 h-7" icon="akar-icons:telegram-fill" style="color: #364168;" />
	</div>
</header>
<main>
	<div id="1" class="max-w-6xl mx-5 sm:mx-auto flex items-center my-72 sm:my-0 sm:h-[100vh]">
		<div
			class="bg-[#F24347] flex items-center justify-center  rounded-full sm:top-36 right-36 bottom-56 sm:right-[15rem] absolute w-32 h-32 sm:w-64 sm:h-64"
		>
			<Icon class="w-6 h-6 sm:w-40 sm:h-40" icon="akar-icons:arrow-right" style="color: white;" rotate="90deg" />
		</div>
		<div class="sm:mb-24">
			<h1 class=" font-bold text-5xl sm:text-[128px] leading-none m-0 text-stroke uppercase">ВЫЕЗДНАЯ</h1>
			<h1 class="sm:ml-28 font-bold text-5xl sm:text-[128px] leading-none m-0 uppercase">ПРОВЕРКА</h1>
			<h1 class="sm:ml-12 font-bold text-5xl sm:text-[128px] leading-none m-0 uppercase">автомобиля</h1>
		</div>
	</div>
	<Price />
	<About />
	<Reviews />
	<Faq />
</main>
<footer class="bg-[#F5F5F5]  sm:h-[25vh]">
	<div class="max-w-7xl sm:py-0 py-12 mx-5 flex justify-between sm:mx-auto sm:pt-16">
		<img class="w-48" src={Logo} alt="" />
		<div>
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
