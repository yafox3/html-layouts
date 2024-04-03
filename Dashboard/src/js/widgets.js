const $widgets = Array.from(document.querySelectorAll('.widget'))

$widgets.forEach($widget => {
	$widget.addEventListener('click', e => {
		if (e.target.classList.contains('widget__hide-trigger')) {
			$widget.classList.toggle('hidden')
		}
	})
})
