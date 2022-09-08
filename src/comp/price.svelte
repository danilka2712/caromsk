<script>
	import axios from 'axios';
	import { imask } from '@imask/svelte';
	let closeOpen = false
	let name = '';
	let number = '';
	let current = 'Проверка автомобиля';
	let price = 1990;
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
		const fullMessage = `Имя: ${name}%0AНомер телефона: ${number}%0AВид услуги: ${current}`;
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

	const items = [
		{
			id: 1,
			name: 'Проверка автомобиля',
			text: 'Комплексно проверим выбранный вами авто в любом городе РФ',
			price: '1900'
		},
		{
			id: 2,
			name: 'Эксперт на один день',
			text: 'Покупайте время специалиста, а не количество машин.',
			price: '12 500'
		},
		{
			id: 3,
			name: 'Автоподбор под ключ',
			text: 'Комплексно проверим выбранный вами авто в любом городе РФ',
			price: '25 000'
		},
		{
			id: 4,
			name: 'Заказать эвакуатор',
			text: 'Перевозим все виды техники до 3,5 тонн',
			price: 'от 1530'
		}
	];
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
<div id="2" class="lg:h-screen  bg-[#F5F5F5]">
	<div class=" max-w-7xl lg:mx-auto mx-5 py-14 sm:pt-20">
		<div>
			<h1 class=" font-semibold text-3xl sm:text-4xl">Выберете услугу</h1>
		</div>
		<div class="grid grid-cols-2 lg:grid lg:grid-cols-4 mt-16 gap-5 sm:gap-14">
			{#each items as i}
				<div
					on:click={() => ((current = i.name), (price = i.price))}
					class:active={current === i.name}
					class="bg-white  sm:h-48 p-4 sm:py-7 py-7 sm:p-7 rounded-lg"
				>
					<h1 class="text-xl flex  leading-6 sm:mb-5 w-32">{i.name}</h1>
					<p class="sm:flex hidden w-40 text-sm font-light">
						{i.text}
					</p>
					<div class="sm:flex flex-col hidden">
						{#if current === i.name}
							<p class=" text-xs pt-6 font-light">Стоимость услуги:</p>
							<h1 class=" font-medium text-xl">1990 руб.</h1>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<div class="sm:mt-20 mt-10 items-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 gap-14">
			<div class="mb-14 sm:mb-0">
				<h1 class=" font-medium text-xl">Вы выбрали:</h1>
				<p>{current}</p>

				<div class="bg-[#E7E7E7] w-full my-6 sm:hidden h-[0.5px]" />
				<div class="flex justify-between sm:hidden">
					<p class="mt-2 text-xl ">Цена:</p>
					<p class="mt-2 text-xl ">{price} руб.</p>
				</div>
			</div>

			<form
				on:submit|preventDefault={submit}
				action=""
				class="p-10 justify-between gap-5 sm:gap-16 flex flex-col sm:flex-row col-span-3 rounded-lg bg-[#D9D9D9]/50"
			>
				<input
					bind:value={name}
					placeholder="Ваше имя"
					class="p-3 py-4 capitalize sm:py-0 w-full rounded-lg"
					type="name"
				/>
				<input
					bind:value={number}
					use:imask={options}
					on:accept={accept}
					on:complete={complete}
					placeholder="Номер телефона"
					class="p-3 py-4 sm:py-0 w-full rounded-lg"
					type="tel"
				/>
				<button class="btn w-full py-4 rounded-lg text-white">Оставить заявку</button>
			</form>
		</div>
	</div>
</div>

<style>
	.active {
		background-color: #f24347;
		color: white;
		height: fit-content;
	}
</style>
