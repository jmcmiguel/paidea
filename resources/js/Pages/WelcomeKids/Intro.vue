<template>

    <!-- Blob Background & Container -->
    <div class="grid min-w-screen bg-right-top lg:min-h-screen bg-no-repeat bg-contain bg-[#f5f5f5] lg:bg-[url('/img/intro-bg.png')]">

        <!-- Kid Image -->
        <!-- <img src="/img/kid-girl.svg" class="animate-wave delay-700 justify-self-end invisible lg:visible xl:h-99 2xl:h-110 xl:mr-32 xl:mt-32 2xl:mr-52 2xl:mt-12"/> -->
        
        <div class="xl:ml-24 xl:mt-32 2xl:ml-42 2xl:mt-42 flex flex-col">

            <!-- Text Description -->
            <h1 class="text-[#4a4a4a] mt-16 text-center xl:text-left text-5xl xl:text-5xl 2xl:text-7xl font-bold">Your Math Tutor <span class="xl:flex mt-3"> will save the day! </span> </h1>
            <p class="text-[#4a4a4a] text-center xl:text-left tracking-wide font-medium xl:text-md 2xl:text-2xl mt-10 xl:mt-2">Give your child the tools to succeed. Online Paideia <br class="hidden xl:block" /> helps you to learn in convenience of your home.</p>

            <!-- Logo Buttons -->
            <div class="flex flex-col lg:flex-row space-x-0 mx-auto lg:space-x-10 xl:mt-12 xl:ml-7 2xl:mt-16 2xl:ml-12">

                <!-- 1on1 Tutorial Button -->
                <div class="flex flex-col w-[80vw] p-3 mt-5 xl:h-40 xl:w-40 2xl:h-52 2xl:w-52 lg-button rounded-xl bg-[#ff8f00] hover:animate-bounce transition-500 ease-in-out">
                    <i class="material-icons !text-8xl 2xl:!text-9xl">people</i>
                    <p class="text-sm font-bold">1-on-1 kay Arjay</p>
                </div>
                
                <!-- Free Demo -->
                <div class="flex flex-col w-[80vw] p-3 mt-5 xl:h-40 xl:w-40 2xl:h-52 2xl:w-52 lg-button rounded-xl bg-[#126b92] hover:animate-bounce transition-500">
                    <i class="material-icons !text-8xl 2xl:!text-9xl">computer</i>
                    <p class="text-sm font-bold">Free Demo</p>
                </div>
            </div>

            <!-- Follow us -->
            <div class="mt-[6rem] xl:mt-[8rem] 2xl:mt-[10rem] mb-10 lg:mb-10 ml-5 lg:ml-0">
                <p class="text-[#adadad] xl:text-sm 2xl:text-2xl">follow us: @onlinepaideia </p>
                
                <!-- Social Media Icons -->
                <div class="flex flex-row text-[#adadad] space-x-2">
                    <i class="hover:animate-pulse cursor-pointer" data-feather="facebook"></i>
                    <i class="material-icons hover:animate-pulse cursor-pointer">whatsapp</i>
                    <i class="hover:animate-pulse cursor-pointer" data-feather="instagram"></i>
                    <i class="hover:animate-pulse cursor-pointer" data-feather="twitter"></i>
                    <i class="hover:animate-pulse cursor-pointer" data-feather="youtube"></i>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="sass" scoped>
.lg-button
	transition: all 300ms ease-in-out
	display: flex
	align-items: center
	justify-content: center
	cursor: pointer
	color: white
	font-size: 2em
	box-shadow: 0px 3px 10px rgba(0,0,0,.16), 0px 3px 10px rgba(0,0,0,.16)
</style>