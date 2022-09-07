<script>
	import axios from 'axios';
	import { open } from '../../store';

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
	}
</script>

<div

	class=" absolute top-0 left-0 z-0 w-screen h-screen bg-[#F5F5F5]"
>
	<div class="max-w-7xl flex mx-auto mt-52">
		<div class="w-1/2 relative z-10">
			<h1 class="text-3xl mb-8 font-medium">Вскрытие автомобиля</h1>
			<p class="">
				Некоторые автомобилисты пытаются открыть машину без ключа самостоятельно, но большинство
				знают, насколько это сложно, и чтобы  <br/> не повредить автомобиль предпочитают обратиться к
				специалистам. <br/> Наши мастера приедут по указанному адресу и профессионально осуществят
				вскрытие без повреждений с помощью специнструмента.<br/><br/> Мы экстренно осуществим аварийную
				разблокировку салона машины в Москве и ближайшему Подмосковью. Работаем круглосуточно,
				оперативно, квалифицированно и на выгодных условиях для клиентов.
			</p>
		</div>
		<div class="w-1/2 pl-72 absolute top-32 right-32 justify-end">
			<form class="bg-[#E7E7E7]  mt-12 rounded-lg p-12" on:submit|preventDefault={submit} action="">
				<div class="flex flex-col gap-5">
					<h1 class="text-xl pb-3 font-semibold">Оставить заявку</h1>
					<input
						placeholder="Ваше имя"
						bind:value={name}
						class="w-full p-3 py-3 rounded-lg"
						type="text"
					/>
					<input
						placeholder="Марка автомобиля"
						bind:value={mark}
						class="w-full p-3 py-3 rounded-lg"
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
					<button class="btn p-3 py-3 rounded-lg text-white w-full">Отправить</button>
				</div>
			</form>
		</div>
	</div>
</div>
