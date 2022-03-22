<template>
    <div class="lg:bg-[url('/img/bg-1.png')] lg:min-h-screen bg-contain 2xl:bg-cover bg-no-repeat bg-right-bottom">
        <h1 class="text-center lg:text-left text-[#06648e] text-7xl lg:text-5xl xl:text-7xl font-bold pt-32 pl-0 lg:pl-3 xl:pl-20">How To Get <span class="text-[#ff6500]">Started</span>?</h1>

        <div class="pl-[5vw] lg:pl-3 xl:pl-20 pt-20 lg:pt-12 xl:pt-20 pb-12 lg:pb-0 flex flex-col drop-shadow-2xl space-y-[-2rem]">
            <div class="z-50 w-[90vw] lg:w-[50vw] xl:w-[40vw] bg-[#06648e] rounded-[2rem] p-5 shadow-2xl hover:scale-110 transition ease-in-out">
                <h2 class="text-white font-extrabold text-4xl md:text-5xl lg:text-2xl xl:text-3xl 2xl:text-4xl pl-5">Step 01: Join Free Session</h2>
                <p class="text-white font-medium text-justify xl:text-center py-10 text-sm md:text-lg lg:text-sm xl:text-md">Choose the ideal day and time for your free 1 hour <br class="hidden xl:block"> tutoring session with an experienced classroom <br class="hidden xl:block"> teacher with just a few simple clicks.</p>
            </div>
            <div class="z-40 w-[90vw] lg:w-[50vw] xl:w-[40vw] bg-[#1280b0] rounded-[2rem] p-5 shadow-2xl hover:scale-110 transition ease-in-out">
                <h2 class="text-white font-extrabold text-4xl md:text-5xl lg:text-2xl xl:text-3xl 2xl:text-4xl pt-12 pl-5">Step 02: Get To Know Your Tutor</h2>
                <p class="text-white font-medium text-justify xl:text-center pt-10 pb-6 text-sm md:text-lg lg:text-sm xl:text-md">You will meet your tutor and learn about our teaching style <br class="hidden xl:block"> during your free session. Then, with your child's permission, <br class="hidden xl:block"> our instructors will begin an interesting and engaging <br class="hidden xl:block"> session.</p>
            </div>
            <div class="z-30 w-[90vw] lg:w-[50vw] xl:w-[40vw] bg-[#5daccf] rounded-[2rem] p-5 shadow-2xl hover:scale-110 transition ease-in-out">
                <h2 class="text-white font-extrabold text-4xl md:text-5xl lg:text-2xl xl:text-3xl 2xl:text-4xl pt-12 pl-5">Step 03: Proceed To Learn More</h2>
                <p class="text-white font-medium text-justify xl:text-center pt-10 pb-5 text-sm md:text-lg lg:text-sm xl:text-md  "> Following your session, you will receive a reflection email <br class="hidden xl:block"> from your tutor assessing your child's development and <br class="hidden xl:block"> alternatives for selecting the best tutoring plan for you. </p>
            </div>
        </div>
    </div>

    <div class="lg:bg-[url('/img/bg-2.png')] bg-[#ff7b2b] lg:min-h-screen bg-contain 2xl:bg-cover bg-no-repeat bg-right-top ">
        <h1 class="text-white pt-20 lg:pt-[20rem] xl:pt-[30rem] 2xl:pt-[50rem] text-center font-bold text-6xl">Be featured, be proud!</h1>
        <p class="text-white text-center pt-6 text-xl">Achievements are the best part of success. <br> Be part of us and showcase your skill.</p>
        <button class="flex mx-auto mt-6 p-5 text-3xl bg-[#06648e] font-bold text-gray-100 rounded-lg border-yellow-1000 hover:animate-bounce">Join For Free</button>
    </div>

    <div class="lg:-mt-[12rem] xl:-mt-0 bg-[#ff7b2b] pb-[30vh] pt-52 xl:pt-64 2xl:pt-64 lg:pt-44 overflow-hidden">

        <div ref="items" class="items relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] select-none">
            <div class="item prev invisible md:visible absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-[50%] overflow-hidden z-[-1] opacity-0 transition-all ease-in-out duration-300">
                <img src="/img/child3.jpg" class="h-full w-full object-cover">
            </div>
		
            <div class=" item active absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-[50%] overflow-hidden z-[-1] opacity-0 transition-all ease-in-out duration-300">
                <img src="/img/child1.jpg" class="h-full w-full object-cover">
            </div>

            <div class="item next invisible md:visible absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-[50%] overflow-hidden z-[-1] opacity-0 transition-all ease-in-out duration-300">
                <img src="/img/child2.jpg" class="h-full w-full object-cover">
            </div>
		
            <div class="absolute top-[50%] left-[50%] w-screen xl:px-[5rem] 2xl:px-[10rem] z-[100] translate-x-[-50%] translate-y-[-50%]">
                <div class="button float-left"> <i class="material-icons text-[#228ab7] hover:text-[#06648e] hover:scale-125 transition ease-in-out cursor-pointer" style="font-size:9rem;">arrow_left</i> </div>
                <div class="button float-right"> <i class="material-icons text-[#228ab7] hover:text-[#06648e] hover:scale-125 transition ease-in-out cursor-pointer" style="font-size:9rem;">arrow_right</i> </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    mounted(){
        this.$nextTick(function() {
            const slider = document.querySelector(".items");
            const slides = document.querySelectorAll(".item");
            const button = document.querySelectorAll(".button");

            let current = 1;
            let prev = current > 0 ? current - 1 : slides.length - 1;
            let next = current < slides.length - 1 ? current + 1 : 0;

            const update = () => {
                slides.forEach(it => {
                    it.classList.remove("active");
                    it.classList.remove("prev", "invisible", "md:visible");
                    it.classList.remove("next", "invisible", "md:visible");
                });
                
                slides[current].classList.add("active");
                slides[prev].classList.add("prev", "invisible", "md:visible");
                slides[next].classList.add("next", "invisible", "md:visible");
            }

            for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
            }

            const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
            const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

            const gotoNum = number => {
                current = number;
                prev = current > 0 ? current - 1 : slides.length - 1;
                next = current < slides.length - 1 ? current + 1 : 0;
                
                console.log('current slide:', current)

                update();
            }

            update();
        })
    }
}
</script>

<style scoped>
.item.active {
  opacity: 1;
  z-index: 99;
  transform: translate(-50%, -50%) scale(1.25);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.item.prev {
  z-index: 2;
  opacity: 0.25;
  transform: translate(-175%, -50%) scale(0.75);
}

.item.next {
  z-index: 2;
  opacity: 0.25;
  transform: translate(75%, -50%) scale(0.75);
}

</style>