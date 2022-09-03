<script>
	import Image2 from '$lib/img/image2.png';
</script>

<div class=" max-w-7xl sm:mt-0 mt-24 mx-auto mb-16">
    <div class="sm:w-[48%] h-screen hidden sm:flex z-10 absolute top-12 sm:top-0  right-0 ">
        <img
            class="object-cover sm:scale-125 object-left-bottom w-screen h-screen"
            src={Image2}
            alt=""
        />
    </div>
    <div class="flex py-8 justify-center items-center">
        <div
            class="sm:bg-white bg-white w-full mx-5 sm:mx-0 z-20 shadow  rounded-md  p-8 sm:p-5 sm:w-[75%] "
        >
      
            <form
                action=""
                class="flex gap-5  flex-col sm:flex-row mt-2 sm:mt-0 justify-between items-center"
            >
                <div class="sm:hidden">
                    <h1 class="text-xl font-semibold">Оставьте заявку</h1>
                </div>
                <div class="w-full">
                    <input
                        placeholder="Ваше имя"
                        class="border border-slate-300 sm:mt-0  mt-2 bg-white/50 sm:bg-white w-full rounded pl-3 p-3"
                        type="text"
                    />
                </div>
                <div class="w-full">
                    <input
                        placeholder="Номер телефона"
                        class="border border-slate-300 font-sans mainLoginInput sm:mt-0 w-full bg-white/50 sm:bg-white  mt-2 rounded pl-3 p-3"
                        type="text"
                    />
                </div>
                <div class="w-full">
                    <select class="border border-slate-300  sm:mt-0 w-full bg-white/50  sm:bg-white mt-2 rounded pl-3 p-3">
                        <option>Разовая диагностика</option>
                        <option>Автоподбор под ключ</option>
                        <option>Эксперт на день</option>
                        <option>Эвакуатор</option>
                        <option >Вскрытие автомобиля</option>



                      </select>
                  
                </div>
                <div class="sm:w-[90%] w-full">
                    <button class="border  w-full rounded px-4 bg-[#E04F4E] text-white p-3"
                        >Оставить заявку</button
                    >
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    .mainLoginInput::-webkit-input-placeholder {
        font-family: 'Raleway', sans-serif;
  }
  
  .mainLoginInput:-ms-input-placeholder {
    font-family: 'Raleway', sans-serif;
  }
  
  .mainLoginInput:-moz-placeholder {
    font-family: 'Raleway', sans-serif;
  }
  
  .mainLoginInput::-moz-placeholder {
    font-family: 'Raleway', sans-serif;
  }
</style>