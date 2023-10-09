const $burger = document.querySelector('.burger')
const $nav = document.querySelector('.nav')

$burger.onclick = () => {
	$burger.classList.toggle('active')
	$nav.classList.toggle('active')
	document.body.classList.toggle('scrollable')
}

const swiper = new Swiper('.swiper', {
	direction: 'vertical',
	spaceBetween: 400,
	slidesPerView: 1,
	mousewheel: true,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	breakpoints: {
		0: {
			direction: 'horizontal',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		},
		1200: {
			direction: 'vertical',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: (index, className) => {
					const sliders = document.querySelectorAll('.swiper-slide')
					return `
						${!index ? `<span class="start-slides">01</span>`: ''}
						<span class="${className}"></span>
						${Array.from(sliders).length === index + 1 ? `<span class="end-slides">0${sliders.length}</span>` : ``}
					`
				}
			}
		}
	},
	
})