<template>
    <div class="lg:bg-[url('/img/bg-1.png')] min-h-screen max-h-screen bg-cover bg-right-bottom">
        <h1 class="text-center lg:text-left text-[#06648e] text-7xl font-bold pt-32 lg:pl-20">How To Get <span class="text-[#ff6500]">Started</span>?</h1>

        <div class="lg:pl-20 pt-20 flex flex-col drop-shadow-2xl">
            <div class="relative z-50 w-[90vw] lg:w-[40vw] bg-[#06648e] rounded-[2rem] p-5 shadow-2xl hover:scale-110 transition ease-in-out">
                <h2 class="text-white font-extrabold text-3xl 2xl:text-4xl pl-5">Step 01: Join Free Session</h2>
                <p class="text-white font-medium text-center py-10 text-md">Choose the ideal day and time for your free 1 hour <br> tutoring session with an experienced classroom <br> teacher with just a few simple clicks.</p>
            </div>
            <div class="absolute mt-48 z-40 w-[90vw] lg:w-[40vw] bg-[#1280b0] rounded-[2rem] p-5 shadow-2xl hover:scale-110 transition ease-in-out">
                <h2 class="text-white font-extrabold text-3xl 2xl:text-4xl pt-12 pl-5">Step 02: Get To Know Your Tutor</h2>
                <p class="text-white font-medium text-center pt-10 pb-6 text-md">You will meet your tutor and learn about our teaching style <br> during your free session. Then, with your child's permission, <br> our instructors will begin an interesting and engaging <br> session.</p>
            </div>
            <div class="absolute mt-[28rem] z-30 w-[90vw] lg:w-[40vw] bg-[#5daccf] rounded-[2rem] p-5 shadow-2xl hover:scale-110 transition ease-in-out">
                <h2 class="text-white font-extrabold text-3xl 2xl:text-4xl pt-12 pl-5">Step 03: Proceed To Learn More</h2>
                <p class="text-white font-medium text-center pt-10 pb-5 text-md"> Following your session, you will receive a reflection email <br> from your tutor assessing your child's development and <br> alternatives for selecting the best tutoring plan for you. </p>
            </div>
        </div>
    </div>

    <div class="lg:bg-[url('/img/bg-2.png')] min-h-screen bg-cover bg-right-top 2xl:pb-[30vh]">
        <h1 class="text-white pt-[30rem] 2xl:pt-[40rem] text-center font-bold text-6xl">Be featured, be proud!</h1>
        <p class="text-white text-center pt-6 text-xl">Achievements are the best part of success. <br> Be part of us and showcase your skill.</p>
        <button class="flex mx-auto mt-6 p-5 text-3xl bg-[#06648e] font-bold text-gray-100 rounded-lg border-yellow-1000 hover:animate-bounce">Join For Free</button>
    </div>

    <div class="bg-[#ff7b2b] pb-[30vh] pt-[10vh] 2xl:pt-0">
        <div class="items">
            <div class="item prev">
                <img src="/img/child3.jpg">
            </div>
		
            <div class=" item active">
                <img src="/img/child1.jpg">
            </div>

            <div class="item next">
                <img src="/img/child2.jpg">
            </div>
		
            <div class="button-container">
                <div class="button"> <i class="material-icons text-[#228ab7] hover:text-[#06648e] hover:scale-125 transition ease-in-out cursor-pointer" style="font-size:9rem;">arrow_left</i> </div>
                <div class="button"> <i class="material-icons text-[#228ab7] hover:text-[#06648e] hover:scale-125 transition ease-in-out cursor-pointer" style="font-size:9rem;">arrow_right</i> </div>
            </div>
	</div>
        
    </div>
</template>

<script>
export default {
    mounted(){
        const slider = document.querySelector(".items");
        const slides = document.querySelectorAll(".item");
        const button = document.querySelectorAll(".button");

        let current = 1;
        let prev = current > 0 ? current - 1 : slides.length - 1;
        let next = current < slides.length - 1 ? current + 1 : 0;

        const update = () => {
            slides.forEach(it => {
                it.classList.remove("active");
                it.classList.remove("prev");
                it.classList.remove("next");
            });
            
            slides[current].classList.add("active");
            slides[prev].classList.add("prev");
            slides[next].classList.add("next");
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
            
            update();
        }

        update();
    }
}
</script>

<style scoped>
.items {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
}

.items .item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  z-index: -1;
  opacity: 0;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item.active {
  opacity: 1;
  z-index: 99;
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 105px -35px rgba(0, 0, 0, 0.75);
}

.item.prev {
  z-index: 2;
  width: 200px;
  height: 200px;
  opacity: 0.25;
  transform: translate(-200%, -50%);
}

.item.next {
  z-index: 2;
  width: 200px;
  height: 200px;
  opacity: 0.25;
  transform: translate(100%, -50%);
}

.items .button-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  padding-left: 10rem;
  padding-right: 10rem;
  z-index: 100;
}

.button-container .button:nth-child(1) {
  float: left;
}

.button-container .button:nth-child(2) {
  float: right;
}   
</style>