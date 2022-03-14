<template>
    <div class="flex flex-col bg-[#f5f5f5] lg:bg-[url('/img/highlight1.png')] xl:min-h-screen bg-cover lg:bg-contain bg-no-repeat bg-left-bottom">
        <h1 class="text-center lg:text-right md:px-5 xl:pr-32 pt-32 text-5xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-[#707070] font-bold tracking-wide">Learn More With <span class="text-[#f7941d]"> Online Paideia </span> </h1>
    
        <div class="text-lg 2xl:text-xl w-[90vw] lg:w-[40vw] xl:w-[30vw] 2xl:pb-[50vh] font-medium ml-0 lg:ml-[53vw] xl:ml-[60vw] text-[#707070] pt-32 md:pt-12 xl:pt-24 2xl:pt-52 flex flex-col space-y-10 2xl:space-y-20 text-justify">
            <span class="flex"> <i class="material-icons text-[#f7941d]" style="font-size:4rem;">arrow_right</i> <p> Your child may attend the tutoring sessions from the comfort of your own home. In our online integrated platform, children may collaborate and communicate with their Arithmetic tutor to solve math problems more effectively. </p> </span>
            <span class="flex"> <i class="material-icons text-[#f7941d]" style="font-size:4rem;">arrow_right</i> <p>Your child and their Math Tutor will continue to work together to learn and build on the foundations of each lesson. You can schedule classes directly with your Math Tutor as required. There is no need to make a commitment.</p> </span>
        </div>
    </div>

    <div class="lg:bg-[url('/img/highlight2.png')] hidden lg:block xl:min-h-screen bg-contain bg-no-repeat bg-right-top">

        <h1 class="text-[#f7941d] lg:text-white text-4xl lg:text-3xl text-center font-bold pr-0 pt-12 md:pt-20 pb-6 lg:pb-3 lg:pt-32 xl:pt-48 2xl:pt-64">Your Child Success is <br class="hidden lg:block"/> Our No.1 Priority</h1>

        <div class="flex flex-col md:pt-6 space-y-16 md:space-y-5 lg:space-y-8 xl:space-y-16">
            <div class="drop-shadow-2xl hover:scale-125 transition-all ease-in-out cursor-pointer w-fit tracking-wider text-[#757575] bg-[#ffffff] mx-auto lg:ml-36 xl:ml-52 2xl:ml-[25rem] py-3 px-10 text-md lg:text-md xl:text-2xl font-semibold rounded-full leading-loosefont-semibold" >
                <i class="align-middle material-icons mr-4" style="font-size:3rem;">group</i> 1-on-1 Tutorial
            </div>

            <div class="drop-shadow-2xl hover:scale-125 transition-all ease-in-out cursor-pointer w-fit tracking-wider text-[#757575] bg-[#ffffff] mx-auto lg:ml-12 xl:ml-20 2xl:ml-[13rem] py-3 px-10 text-md lg:text-md xl:text-2xl font-semibold rounded-full leading-loosefont-semibold" >
                <i class="align-middle material-icons mr-4" style="font-size:3rem;">event_available</i> Flexible Scheduling
            </div>

            <div class="drop-shadow-2xl hover:scale-125 transition-all ease-in-out cursor-pointer w-fit tracking-wider text-[#757575] bg-[#ffffff] mx-auto lg:ml-48 xl:ml-72 2xl:ml-[30rem] py-3 px-10 text-md lg:text-md xl:text-2xl font-semibold rounded-full leading-loosefont-semibold" >
                <i class="align-middle material-icons mr-4" style="font-size:3rem;">thumb_up</i> Interactive Classroom
            </div>

            <div class="drop-shadow-2xl hover:scale-125 transition-all ease-in-out cursor-pointer w-fit tracking-wider text-[#757575] bg-[#ffffff] mx-auto lg:ml-12 xl:ml-20 2xl:ml-[13rem] py-3 px-10 text-md lg:text-md xl:text-2xl font-semibold rounded-full leading-loosefont-semibold" >
                <i class="align-middle material-icons mr-4" style="font-size:3rem;">videocam</i> Lesson Review
            </div>
        </div>
    </div>

    <!-- Responsive 'Your child Success' -->
    <div class="block lg:hidden">
        <div class="p-6 sm:px-20 bg-[#f5f5f5] border-b border-gray-200 ">
            <h1 class="text-[#f7941d] lg:text-white text-4xl lg:text-3xl text-center font-bold pr-0 pt-12 md:pt-20 pb-6 lg:pb-3 lg:pt-32 xl:pt-48">Your Child Success is <br class="hidden lg:block"/> Our No.1 Priority</h1>
        </div>

        <div class="bg-[#f5f5f5] bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
            <div class="p-6">
                <div class="flex items-center">
                    <i class="align-middle material-icons mx-auto text-[#757575]" style="font-size:3rem;">group</i> 
                </div>

                <div class="">
                    <div class="ml-4 text-lg text-center text-gray-600 leading-7 font-semibold">1-on-1 Tutorial</div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
                <div class="flex items-center">
                    <i class="align-middle material-icons mx-auto text-[#757575]" style="font-size:3rem;">event_available</i>
                </div>

                <div class="">
                    <div class="ml-4 text-lg text-center text-gray-600 leading-7 font-semibold">Flexible Scheduling</div>
                </div>
            </div>

            <div class="p-6 border-t border-b border-gray-200">
                <div class="flex items-center">
                    <i class="align-middle material-icons mx-auto text-[#757575]" style="font-size:3rem;">thumb_up</i> 
            </div>

                <div class="">
                    <div class="ml-4 text-lg text-center text-gray-600 leading-7 font-semibold">Interactive Classroom</div>
                </div>
            </div>

            <div class="p-6 border-t border-b border-gray-200 md:border-l">
                <div class="flex items-center">
                    <i class="align-middle material-icons mx-auto text-[#757575]" style="font-size:3rem;">videocam</i> 
                </div>

                <div class="">
                    <div class="ml-4 text-lg text-center text-gray-600 leading-7 font-semibold">Lesson Review</div>
                </div>
            </div>
        </div>
    </div>

    <div class="lg:bg-[url('/img/highlight3.png')] hidden lg:block min-h-[60vh] bg-contain bg-no-repeat bg-left-bottom">
        <h1 class="text-[#444444] text-center lg:text-left text-3xl font-medium ml-0 lg:ml-[50vw] mt-12 lg:mt-0 tracking-wide">Our dynamic online tutoring method is curriculum-aligned for grade school students. Our goal is to make your child enjoy learning</h1>
    
        <div class="flex flex-col ml-12 lg:ml-[53vw] space-y-8 mt-12 pb-12">
            <div class="text-lg text-[#444444]">
                <i class="align-middle material-icons mr-4 text-[#ff8f00]" style="font-size:3rem;">check_circle</i> Get homework assistance and more practice
            </div>
            <div class="text-lg text-[#444444]">
                <i class="align-middle material-icons mr-4 text-[#ff8f00]" style="font-size:3rem;">check_circle</i> Boost their mathematical confidence
            </div>
            <div class="text-lg text-[#444444]">
                <i class="align-middle material-icons mr-4 text-[#ff8f00]" style="font-size:3rem;">check_circle</i> Get homework assistance and more practice
            </div>
            <div class="text-lg text-[#444444]">
                <i class="align-middle material-icons mr-4 text-[#ff8f00]" style="font-size:3rem;">check_circle</i> Progress over their current grading level
            </div>
        </div>
    </div>

    <!-- Responsive Bullets -->
    <div class="block lg:hidden mb-12">
        <div class="p-6 sm:px-20 bg-[#f5f5f5]">
            <h1 class="text-[#444444] text-center lg:text-left text-3xl font-medium ml-0 lg:ml-[50vw] mt-12 lg:mt-0 tracking-wide">Our dynamic online tutoring method is curriculum-aligned for grade school students. Our goal is to make your child enjoy learning</h1>
        </div>

        <div class="bg-[#f5f5f5] bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
            <div class="p-6">
                <div class="text-lg text-[#444444] text-center">
                    <i class="align-middle material-icons mx-auto text-[#ff8f00]" style="font-size:3rem;">check_circle</i>
                    Get homework assistance and more practice
                </div>
            </div>

            <div class="p-6">
                <div class="text-lg text-[#444444] text-center">
                    <i class="align-middle material-icons mx-auto text-[#ff8f00]" style="font-size:3rem;">check_circle</i> 
                    Boost their mathematical confidence
                </div>
            </div>

            <div class="p-6">
                <div class="text-lg text-[#444444] text-center">
                    <i class="align-middle material-icons mx-auto text-[#ff8f00]" style="font-size:3rem;">check_circle</i> 
                    Get homework assistance and more practice
                </div>
            </div>

            <div class="p-6">
                <div class="text-lg text-[#444444] text-center">
                    <i class="align-middle material-icons mx-auto text-[#ff8f00]" style="font-size:3rem;">check_circle</i> 
                    Progress over their current grading level
                </div>
            </div>
        </div>
    </div>
</template>