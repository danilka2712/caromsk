<script>
	import main1 from '$lib/img/1main.svg';
	import main2 from '$lib/img/2main.svg';
	import main3 from '$lib/img/3main.svg';

	const items = [
		{ name: 'Разовая диагностика', price: 1590, img: `${main1}` },
		{ name: 'Автоподбор под ключ', price: 25900, img: `${main2}` },
		{ name: 'Эксперт на день', price: 12900, img: `${main3}` }
	];
</script>

<div class="sm:h-[80vh] max-w-7xl mx-auto">
	<div class="mb-20 mx-5 sm:mx-0">
		<h1 class="text-2xl font-medium">Наши услуги</h1>
	</div>
	<div class="sm:grid sm:mx-0 mx-5 grid-cols-3 gap-10">
		{#each items as i}
			<div
				class=" bg-white rounded-md h-72 mb-5 shadow-md "
			>
				<div class=" relative cursor-default">
					<h1 class="p-8 font-medium text-xl z-20 absolute">{i.name}</h1>
					<h1 class="p-8 pt-16 font-medium  text-[#E04F4E] z-20 font-sans text-4xl absolute">
						{i.price}₽
					</h1>

					<img
						class=" object-cover  object-bottom h-full w-full"
						src={i.img}
						alt=""
					/>
				</div>
			</div>
		{/each}
	</div>
	
</div>
