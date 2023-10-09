const $burger = document.querySelector('.burger')
const $nav = document.querySelector('.nav')

$burger.onclick = () => {
	$burger.classList.toggle('active')
	$nav.classList.toggle('active')
	document.body.classList.toggle('scrollable')
}

swiper = new Swiper('.slider', {
	// direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: true,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
})
