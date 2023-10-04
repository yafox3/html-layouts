const $burger = document.querySelector('.burger')
const $nav = document.querySelector('.nav')

$burger.onclick = () => {
	$burger.classList.toggle('active')
	$nav.classList.toggle('active')
	document.body.style = 'overflow: hidden'
}