<script>
	import axios from 'axios';
	import { open } from '../../store';
	import Icon from '@iconify/svelte';

	import { imask } from '@imask/svelte';
	let closeOpen = false;
	import { fly } from 'svelte/transition';
	let name = '';
	let mark = '';
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
		const fullMessage = `Вскрытие автомобиля%0Имя: ${name}%0AМарка авто: ${mark}%0AНомер телефона: ${number}`;
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
		closeOpen = true;
	}
</script>

{#if closeOpen}
	<div
		class="w-screen h-screen fixed z-30 top-0 flex justify-center items-center left-0 bg-black/40"
	>
		<div class="w-56 bg-white rounded-md flex flex-col justify-center items-center  p-5">
			<h1 class="text-center font-medium text-xl mb-7">Отправлено</h1>
			<p class="text-center">Ожидайте звонка в течение нескольких минут</p>
			<button
				on:click={() => (closeOpen = false)}
				class="bg-[#f24347] text-white rounded-md w-full h-8 mt-7 ">Ок</button
			>
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
	<div class=" absolute top-0 left-0 z-0 w-screen h-screen bg-[#F5F5F5]">
		<div class="max-w-7xl sm:flex mx-5 sm:mx-auto mt-32 sm:mt-40">
			<div class="sm:w-1/2 relative z-10">
				<h1 class="sm:text-3xl text-2xl mb-8 font-medium">Вскрытие автомобиля</h1>
				<p class="sm:hidden">
					Наши мастера приедут по указанному адресу и
					профессионально осуществят вскрытие без повреждений с помощью специнструмента.
				</p>
				<p class="sm:flex hidden">
					Некоторые автомобилисты пытаются открыть машину без ключа самостоятельно, но большинство
					знают, насколько это сложно, и чтобы <br /> не повредить автомобиль предпочитают
					обратиться к специалистам. <br /> Наши мастера приедут по указанному адресу и
					профессионально осуществят вскрытие без повреждений с помощью специнструмента.<br /><br />
					Мы экстренно осуществим аварийную разблокировку салона машины в Москве и ближайшему Подмосковью.
					Работаем круглосуточно, оперативно, квалифицированно и на выгодных условиях для клиентов.
				</p>
				<div class="flex sm:text-xl items-center sm:justify-start sm:gap-5 justify-between mt-10">
					<p class=" ">Стоимость:</p>
					<p>от <span class="">900</span> руб.</p>
				</div>
			</div>
			<div class="sm:w-1/2 py-10  sm:pl-80 sm:absolute sm:top-32 sm:right-32 sm:justify-end">
				<form
					class="bg-[#E7E7E7] rounded-lg sm:p-12 p-10"
					on:submit|preventDefault={submit}
					action=""
				>
					<div class="flex flex-col gap-5 sm:gap-10">
						<input
							placeholder="Ваше имя"
							bind:value={name}
							class="w-full capitalize p-3 py-3  rounded-lg"
							type="text"
						/>
						<input
							placeholder="Марка автомобиля"
							bind:value={mark}
							class="w-full capitalize p-3 py-3  rounded-lg"
							type="text"
						/>
						<input
							placeholder="Номер телефона"
							bind:value={number}
							use:imask={options}
							on:accept={accept}
							on:complete={complete}
							class="p-3 py-3  w-full rounded-lg"
							type="tel"
						/>
						<button class="btn p-3 py-3  rounded-lg text-white w-full">Отправить</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
