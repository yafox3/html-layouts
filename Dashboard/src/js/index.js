const $accordionTriggers = Array.from(document.querySelectorAll('.accordion__item-trigger'))

$accordionTriggers.forEach($trigger =>
	$trigger.addEventListener('click', () => {
		$trigger.parentElement.classList.toggle('active')
	})
)

const $widgets = Array.from(document.querySelectorAll('.widget'))

$widgets.forEach($widget => {
	$widget.addEventListener('click', e => {
		if (e.target.classList.contains('widget__hide-trigger')) {
			$widget.classList.toggle('hidden')
		}
	})
})

const $projectCards = Array.from(document.querySelectorAll('.project-card'))

$projectCards.forEach($card => {
	$card.addEventListener('click', function () {
		$projectCards.forEach($card => $card.classList.remove('active'))

		this.classList.add('active')

		const $projectTypeInfo = document.getElementById('project-type-info')

		$projectTypeInfo.querySelector('.project-type-info__title').innerText = this.dataset.title
		$projectTypeInfo.querySelector('.project-type-info__text').innerText = this.dataset.text
	})
})
