<script>
	import axios from 'axios';
	import { imask } from '@imask/svelte';
	import { open } from '../../store';
	import Icon from '@iconify/svelte';
	import Image from '$lib/img/Eve.svg'
	let closeOpen = false;

	let name = '';
	let number = '';
	const token = '5312487588:AAHrH9cNC5-amKNacngShd3ljnOwaJOmsHs';
	const chatId = 596613157;

	const options = {
		mask: '{+7} (000) 000-00-00',
		lazy: false
	};

	function accept({ detail: maskRef }) {
		console.log('accept', maskRef.value);
		number = maskRef.value;
	}

	function complete({ detail: maskRef }) {
		console.log('complete', maskRef.unmaskedValue);
	}

	function submit() {
		const fullMessage = `Заказ эвакуатора%0AИмя: ${name}%0AНомер телефона: ${number}`;
		axios
			.post(
				`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`
			)
			.then(
				(response) => {
					console.log('SUBMIT', response);
				},
				(error) => {
					console.log(error);
				}
			);
			closeOpen = true
	}
</script>
{#if closeOpen }
<div
class="w-screen h-screen fixed z-30 top-0 flex justify-center items-center left-0 bg-black/40"
>
<div class="w-56 bg-white rounded-md flex flex-col justify-center items-center  p-5">
	<h1 class="text-center font-medium text-xl mb-7">Отправлено</h1>
	<p class="text-center">Ожидайте звонка в течение нескольких минут</p>
	<button on:click={() => closeOpen = false} class="bg-[#f24347] text-white rounded-md w-full h-8 mt-7 ">Ок</button>
</div>
</div>
{/if}
{#if $open}
	<div class="bg-white fixed z-40 top-0 left-0 w-screen h-screen sm:hidden">
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
	<div class="w-screen absolute z-0 top-0 left-0 sm:h-screen bg-[#F5F5F5]">
		<div class="max-w-7xl lg:flex mx-5 lg:mx-auto mt-32  sm:mt-40">
			<div class="lg:w-1/2 relative z-10">
				<h1 class="lg:text-3xl text-2xl lg:mb-8 font-medium">Эвакуатор </h1>
				<p class="text-base hidden lg:flex">
					Срочно потребовалась техническая помощь на дорогах Омской области? «CARHUNTER» оперативно
					предоставит вам эти услуги в любом районе <br /> Омска – в любое время суток, быстро,
					профессионально, недорого. Эвакуация автотранспорта производиться слаженной командой
					специалистов.<br /> Мы ответственно выполняем свою работу, помогая Омским автомобилистам уже
					более 3 лет. Нам доверяют эвакуацию и перевозку автомобилей любой сложности и уверенно рекомендуют
					друзьям.
				</p>
				<p class="text-base mt-6 lg:hidden">
					На дороге может случиться внезапная сложная ситуация, когда необходимо вызвать эвакуатор в
					Омской области. Круглосуточная служба «CARHUNTER» оказывает помощь в случае
					запланированной перевозки или срочной эвакуации автомобиля в Омске.
				</p>
				<div class="flex sm:text-xl items-center lg:justify-start lg:gap-5 justify-between mt-10">
					<p class="">Стоимость:</p>
					<p>от <span class="">1550</span> руб.</p>
				</div>
				<form class="bg-[#E7E7E7] mt-10 rounded-lg p-10" on:submit|preventDefault={submit} action="">
					<div class="flex flex-col lg:flex-row gap-5">
						<input
							placeholder="Ваше имя"
							bind:value={name}
							class="w-full capitalize p-3 py-3 rounded-lg"
							type="text"
						/>
						<input
							placeholder="Номер телефона"
							bind:value={number}
							use:imask={options}
							on:accept={accept}
							on:complete={complete}
							class="p-3 py-3 lg:py-0 w-full rounded-lg"
							type="tel"
						/>
						<button class="btn p-3 py-3 rounded-lg text-white w-full">Отправить</button>
					</div>
				</form>
			</div>
			<div class="lg:w-1/2 lg:flex lg:absolute sm:z-0 sm:top-32 sm:right-32 sm:justify-end">
				<div class="lg:w-3/4 w-full">
					<img src={Image} alt="" />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
