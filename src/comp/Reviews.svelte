<script>
	let reviews = [
		{
			id: 1,
			name: 'Михаил',
			text: 'Хочу поблагодарить данную компанию за великолепнуюи профессиональную работу.Мастера своего дела, которые подбирают машину,очень счательно. Всем советую!'
		},
		{
			id: 2,
			name: 'Алексей',
			text: 'Спасибо огромное ребятам, в частности Владу, за комплексный подбор БМВ. Профессионалы своего дела. Буду обращаться еще.'
		},
		{
			id: 3,
			name: 'Алина',
			text: 'Хочу выразить благодарность компании. Подобрали авто по моему запросу. Брала в конце ноября по приемлемой цене (с 100000 км пробег) на данный момент пробег 110000 км. Спасибо. Рекомендую.'
		},
		{
			id: 4,
			name: 'Иван',
			text: 'Большое ,человеческое спасибо ребятам за оперативность! Даже и не думал , что найдут так быстро и в такой жирной комплектации!!!'
		}
	];
</script>

<div class="lg:h-[70vh] lg:relative  max-w-7xl pt-20 mx-5 sm:flex lg:mx-auto">
	<div class="w-full">
		<div class="mb-12 sm:mb-0">
			<h1 class="text-3xl sm:text-4xl font-semibold">Отзывы</h1>
		</div>
		<div class="lg:grid sm:grid sm:grid-cols-2 sm:mt-16 lg:grid-cols-4 grid gap-5 sm:gap-16 ">
			{#each reviews as r}
				<div class="bg-[#F5F5F5] p-7 rounded-lg w-full">
					<h1 class="sm:text-base text-lg font-medium pb-2">{r.name}</h1>
					<p class="sm:text-sm">{r.text}</p>
				</div>
			{/each}
		</div>
		<div class="w-full flex justify-end  items-center mt-10">
				<p>Все отзывы</p>
		</div>
	</div>
</div>
