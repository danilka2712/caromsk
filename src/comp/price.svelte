<script>
	let current = 'Проверка одного автf';
	let price = 1990;

	const items = [
		{
			id: 1,
			name: 'Проверка одного автa',
			text: 'Комплексно проверим выбранный вами авто в любом городе РФ',
			price: 1990
		},
		{
			id: 2,
			name: 'Проверка одного автe',
			text: 'Комплексно проверим выбранный вами авто в любом городе РФ',
			price: 19903
		},
		{
			id: 3,
			name: 'Проверка одного авт3',
			text: 'Комплексно проверим выбранный вами авто в любом городе РФ',
			price: 19902
		},
		{
			id: 4,
			name: 'Проверка одного автf',
			text: 'Комплексно проверим выбранный вами авто в любом городе РФ',
			price: 19901
		}
	];
</script>

<div id="2" class="sm:h-screen  bg-[#F5F5F5]">
	<div class=" max-w-7xl sm:mx-auto mx-5 py-14 sm:pt-20">
		<div>
			<h1 class=" font-semibold text-3xl sm:text-4xl">Выберете услугу</h1>
		</div>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-16 gap-5 sm:gap-14">
			{#each items as i}
				<div
					on:click={() => ((current = i.name), (price = i.price))}
					class:active={current === i.name}
					class="bg-white  sm:h-48 p-7 rounded-lg"
				>
					<h1 class="text-xl flex  leading-6 sm:mb-5 w-32">{i.name}</h1>
					<p class="sm:flex hidden w-40 text-sm font-light">
						Комплексно проверим выбранный вами авто в любом городе РФ
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
		<div class="sm:mt-20 mt-10 items-center sm:grid sm:grid-cols-4 gap-14">
			<div class="mb-14 sm:mb-0">
				<h1 class=" font-medium text-xl">Вы выбрали:</h1>
				<p>{current}</p>
				
				<div class="bg-[#E7E7E7] w-full my-6 sm:hidden h-[0.5px]" />
				<div class="flex justify-between sm:hidden">
					<p class="mt-2 text-xl ">Цена:</p>
					<p class="mt-2 text-xl ">{price} руб.</p>
				</div>
			</div>
			<div
				class="p-10 justify-between gap-5 sm:gap-16 flex flex-col sm:flex-row col-span-3 rounded-lg bg-[#D9D9D9]/50"
			>
				<input placeholder="Ваше имя" class="p-3 py-4 sm:py-0 w-full rounded-lg" type="text" />
				<input
					placeholder="Номер телефона"
					class="p-3 py-4 sm:py-0 w-full rounded-lg"
					type="text"
				/>
				<button class="btn w-full py-4 rounded-lg text-white">Оставить заявку</button>
			</div>
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
