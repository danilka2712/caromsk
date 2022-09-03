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

<div class="sm:h-screen pb-44 max-w-7xl sm:mt-0 my-20 mx-5 sm:flex sm:mx-auto">
	<div class="sm:w-1/2">
		<div class="mb-20">
			<h1 class="text-2xl font-medium ">Что включает услуга автоподбора</h1>
			<p class="mt-12 text-lg">Проводится полная диагностика электронных систем, двигателя, ходовой части и колесной базы. Проверяется состояние лакокрасочного покрытия. Помимо этого, выявляется возможное скручивание пробега – изменение его показателей с целью продемонстрировать, что машина более новая. Производится проверка жидкостей, зазоров между деталями, толщины кузова и т.д. Иными словами, автомобиль исследуется вдоль и поперек.
		</div>
	</div>
	<div class="sm:w-1/2 mx-5 mt-8">
		<div class="sm:mb-20 sm:flex sm:justify-end ">
			<img class="sm:w-2/4 w-full h-full" src="src\lib\img\Car3.svg" alt="" />
		</div>
	</div>
</div>
