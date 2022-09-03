<script>
	import Icon from '@iconify/svelte';
	import Price from '../comp/price.svelte';
	import Anket from '../comp/anket.svelte';
	import Logo from '$lib/img/Logo.png'
import About from '../comp/about.svelte';
</script>

<header class="max-w-7xl  flex justify-between items-center mx-5 sm:mx-auto py-8">
	<div class="items-center flex">
		<img class="w-44 " src={Logo} alt="" />
	</div>
	<div class="sm:flex hidden items-center gap-8">
		<a href="/">Главная</a>
		<a href="/">О нас</a>
		<a href="/">Эвакуатор</a>
		<a href="/">Вскрытие автомобиля</a>
	</div>
	<div class="items-center hidden sm:flex">
		<button class="bg-[#E04F4E] text-white p-2.5 rounded-sm px-6"> Оставить заявку </button>
	</div>
	<div class="items-center sm:hidden flex">
		<a
			href="tel://+79081197279"
			class="bg-[#E04F4E] text-white rounded-full w-8 h-8 items-center flex justify-center"
		>
			<Icon icon="bx:phone-call" style="color: white;" />
		</a>
	</div>
</header>
<div class="sm:py-24 py-12 max-w-7xl flex justify-between items-center mx-5 sm:mx-auto ">
	<div>
		<h1 class="sm:text-5xl sm:flex hidden leading-3  font-bold">
			Выездная проверка автомобиля <br> перед покупкой в Омске
		</h1>
		<h1 class="sm:text-6xl sm:hidden text-4xl leading-tight font-bold">
			Выездная проверка автомобиля перед покупкой в Омске
		</h1>
		<p class="text-base  sm:hidden mt-10 leading-normal ">
			Выявим все скрытые дефекты, последствия аварий, признаки работы в такси, скрученный пробег.
		</p>
		<p class="sm:text-xl hidden sm:flex  mt-10 leading-normal ">
			Выявим все скрытые дефекты, последствия аварий,<br /> признаки работы в такси, скрученный пробег.
		</p>
	</div>
</div>
<main class="w-full ">
	<Anket />
	<Price />
	<About/>
</main>
<footer class="h-screen bg-[#c9e7f2]">
	<div />
</footer>
