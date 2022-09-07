<script>
	import axios from 'axios';
	import { imask } from '@imask/svelte';
	import { open } from '../../store';
	import Icon from '@iconify/svelte';

	let closeOpen = false;
	import { fly } from 'svelte/transition';
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
		const fullMessage = `Имя: ${name}%0AНомер телефона: ${number}`;
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
	}
</script>

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
				<a on:click={open.increment} href="/">О нас</a>
				<a on:click={open.increment} href="evacuator">Эвакуатор</a>
				<a on:click={open.increment} href="autopsy">Вскрытие авто</a>
			</div>
		</div>
	</div>
{:else}
	<div class="w-screen absolute top-0 left-0 sm:h-screen bg-[#F5F5F5]">
		<div class="max-w-7xl sm:flex mx-5 sm:mx-auto mt-32  sm:mt-52">
			<div class="sm:w-1/2 relative z-10">
				<h1 class="sm:text-3xl text-2xl sm:mb-8 font-medium">Эвакуатор</h1>
				<p class="text-base hidden sm:flex">
					Срочно потребовалась техническая помощь на дорогах Омской области? «CARHUNTER» оперативно
					предоставит вам эти услуги в любом районе <br /> Омска – в любое время суток, быстро,
					профессионально, недорого. Эвакуация автотранспорта производиться слаженной командой
					специалистов.<br /> Мы ответственно выполняем свою работу, помогая Омским автомобилистам уже
					более 3 лет. Нам доверяют эвакуацию и перевозку автомобилей любой сложности и уверенно рекомендуют
					друзьям.
				</p>
				<p class="text-base mt-6 sm:hidden">
					На дороге может случиться внезапная сложная ситуация, когда необходимо вызвать эвакуатор в
					Омской области. Круглосуточная служба «CARHUNTER» оказывает помощь в случае
					запланированной перевозки или срочной эвакуации автомобиля в Омске.
				</p>
				<form class="bg-[#E7E7E7] mt-12 rounded-lg p-6" on:submit|preventDefault={submit} action="">
					<div class="flex flex-col sm:flex-row gap-5">
						<input
							placeholder="Ваше имя"
							bind:value={name}
							class="w-full p-3 py-3 rounded-lg"
							type="text"
						/>
						<input
							placeholder="Номер телефона"
							bind:value={number}
							use:imask={options}
							on:accept={accept}
							on:complete={complete}
							class="p-3 py-3 sm:py-0 w-full rounded-lg"
							type="tel"
						/>
						<button class="btn p-3 py-3 rounded-lg text-white w-full">Отправить</button>
					</div>
				</form>
			</div>
			<div class="sm:w-1/2 sm:flex sm:absolute sm:z-0 sm:top-32 sm:right-32 sm:justify-end">
				<div class="sm:w-3/4 w-full">
					<img src="src\lib\img\Eve.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
{/if}
<style>

</style>