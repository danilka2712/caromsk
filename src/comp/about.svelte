<script>
	import Car3 from '$lib/img/Avtomih.svg';
</script>

<div class="sm:h-screen relative  max-w-7xl pt-20 mx-5 sm:flex sm:mx-auto">
	<div class="">
		<div class="">
			<div>
				<h1 class="text-3xl sm:text-4xl font-semibold">Что мы проверяем</h1>
			</div>
			<div>
				<h1 class=" font-medium text-xl mt-10 pb-3">Внешний осмотр</h1>
				<ul
					class="
					list-outside mx-5 list-disc text-[#666566]"
				>
					<li>проверка ЛКП толщиномером, поиск коррозии и скрытых повреждений</li>
					<li>была ли замена деталей кузова, стекол, фар</li>
					<li>визyaльный ocмoтp caлoнa, моторного отсека и багажного отделения</li>
				</ul>
			</div>
			<div>
				<h1 class="font-medium text-xl mt-10 pb-3">
					Тест-драйв и компьютерная диагностика электронных систем
				</h1>
				<ul
					class="
				list-outside mx-5 list-disc  text-[#666566]"
				>
					<li>коробка передач, двигатель</li>
					<li>определение реального пробега</li>
					<li>системы безопасности, климат-контроля</li>
					<li>исправность электрооборудования</li>
				</ul>
			</div>
			<div>
				<h1 class="font-medium text-xl mt-10 pb-3">
					Состояние ходовой части и рулевого управления
				</h1>
				<ul
					class="
					list-outside mx-5 list-disc text-[#666566]"
				>
					<li>уровни жидкостей (тормозной, гидроусилителя, масла)</li>
					<li>рулевое управление</li>
					<li>подвеска</li>
					<li>тормозная и выхлопная системы</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="hidden lg:flex">
		<img class="w-[55rem] absolute -right-32 z-10 -bottom-20" src={Car3} alt="" />
		<div class=" bg-[#F24347] w-[34rem] h-[34rem] absolute rounded-full z-0 translate-x-24" />
	</div>
</div>
