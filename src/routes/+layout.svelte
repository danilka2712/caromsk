<script>
	import '../app.css';
	import { open } from '../store';
	import Logo from '$lib/img/Logo.svg';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
</script>

<header
	in:fade={{ delay: 100, duration: 300 }}
	out:fade={{ delay: 100, duration: 300 }}
	class=" max-w-7xl z-20 relative  items-center mx-5 lg:mx-auto mt-5 lg:mt-8 flex justify-between"
>
	<div class="flex  lg:w-fit w-full justify-between items-center">
		<div>
			<a href="/">
				<img class="w-48 hidden sm:flex lg:pt-0 pt-1" src={Logo} alt="" />
			</a>
			<a href="/">
				<img class="w-40 sm:hidden lg:pt-0 pt-1" src={Logo} alt="" />
			</a>
		</div>
		<div class="lg:hidden  flex items-center gap-5">
			<a
				class="bg-[#364168] w-7 h-7 flex items-center justify-center rounded-full"
				href="tel:+7 (900) 000 00-00"
			>
				<Icon class="w-4 h-4" icon="akar-icons:phone" color="#ffffff" />
			</a>
			<button on:click={open.increment}>
				<Icon class="w-7 h-7" icon="heroicons-solid:menu-alt-4" style="color: #364168;" />
			</button>
		</div>
	</div>

	<div class="gap-7 hidden lg:flex items-center">
		<a href="/">Главная</a>
		<a href="evacuator">Эвакуатор</a>
		<a href="autopsy">Вскрытие автомобиля</a>
	</div>
	<div class="gap-7 hidden lg:flex items-center">
		<a href="/">+ +7 (913) 113 13-23</a>
		<Icon class="w-7 h-7" icon="akar-icons:whatsapp-fill" style="color: #364168;" />
		<Icon class="w-7 h-7" icon="akar-icons:telegram-fill" style="color: #364168;" />
	</div>
</header>
<slot />
