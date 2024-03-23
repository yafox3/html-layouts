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
