<template>
    <div class="inner-fabs">
        <!-- Messenger -->
        <div class="fab round bg-[#0084ff]" id="fab6" data-tooltip="Facebook Messenger">
            <i data-feather="facebook"></i>
        </div>

        <!-- Whatsapp -->
        <div class="fab round bg-[#4dc247]" id="fab5" data-tooltip="Whatsapp">
            <i class="material-icons">whatsapp</i>
        </div>

        <!-- Instagram -->
        <div class="fab round bg-[#fbad50]" id="fab4" data-tooltip="Instagram">
            <i data-feather="instagram"></i>
        </div>

        <!-- Twitter -->
        <div class="fab round bg-[#00acee]" id="fab3" data-tooltip="Twitter">
             <i data-feather="twitter"></i>
        </div>

        <!-- Youtube -->
        <div class="fab round bg-[#FF0000]" id="fab2" data-tooltip="Youtube">
             <i data-feather="youtube"></i>
        </div>
    </div>
    <div class="fab round bg-[#126b92]" id="fab1">
        <i class="material-icons" id="fabIcon">chat_bubble_outline</i>
    </div>
</template>

<script>
export default {
    mounted() {
        let fab1 = document.getElementById("fab1");
        let innerFabs = document.getElementsByClassName("inner-fabs")[0];

        fab1.addEventListener("click", function () {
            innerFabs.classList.toggle("show");
        });

        document.addEventListener("click", function (e) {
            switch (e.target.id) {
                case "fab1":
                case "fab2":
                case "fab3":
                case "fab4":
                case "fab5":
                case "fab6":
                case "fabIcon":
                    break;
                default:
                    innerFabs.classList.remove("show");
                    break;
            }
        });

		// Init for Feather-icons
		feather.replace();
    },
};
</script>

<style lang="sass" scoped>
.round
	border-radius: 50%

.fab
	transition: all 300ms ease-in-out
	width: 56px
	height: 56px
	display: flex
	align-items: center
	justify-content: center
	position: fixed
	right: 30px
	bottom: 30px
	user-select: none
	cursor: pointer
	color: white
	font-size: 2em
	box-shadow: 0px 3px 10px rgba(0,0,0,.16), 0px 3px 10px rgba(0,0,0,.16)
	z-index: 10000

.fab i
	transition: all 300ms ease-in-out
	will-change: transform

.inner-fabs .fab
	width: 40px
	height: 40px
	right: 38px
	bottom: 46px
	font-size: 1.5em
	will-change: bottom

@for $i from 0 through 5
	.inner-fabs.show .fab
		&:nth-child(#{$i + 1})
			bottom: #{$i * 50 + 100}px

.inner-fabs.show + .fab i
	transform: rotate(135deg)

.fab:before
	content: attr(data-tooltip)
	transition: opacity 150ms cubic-bezier(.4,0,1,1)
	position: absolute
	visibility: hidden
	opacity: 0
	box-shadow: 0 1px 2px rgba(0,0,0,.15)
	color: #ececec
	right: 50px
	top: 25%
	background-color: rgba(70,70,70,.9)
	font-size: .5em
	line-height: 1em
	display: inline-block
	text-align: center
	white-space: nowrap
	border-radius: 2px
	padding: 6px 8px
	max-width: 200px
	font-weight: bold
	text-overflow: ellipsis
	vertical-align: middle

.inner-fabs.show .fab:hover:before
	content: attr(data-tooltip)
	visibility: visible
	opacity: 1
</style>
