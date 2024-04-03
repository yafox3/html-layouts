export class RenderHTML {
	constructor(data) {
		this.data = data
	}

	header() {
		const $header = document.querySelector('.header')

		$header.querySelector('.account__name').textContent = this.data.employer.user_name
		$header.querySelector('.account__avatar').querySelector('img').src =
			this.data.employer.link_photo
		$header.querySelector('.account__link-leave').href = 'https://paymall.pw/'

		$header.querySelector('.header__submenu-news').innerHTML = this.data.news
			.map(item => `<li><a href="${item.todo}">${item.text}</a></li>`)
			.join('')

		$header.querySelector('.header__submenu-alert').innerHTML = this.data.alert
			.map(alert => `<li><a href="#">${alert.text_alert}</a></li>`)
			.join('')
	}

	addWidgetBtn() {
		const $widgetsAdd = document.querySelector('.widgets__add')
		let $widgetVariants = ''

		for (const btn in this.data.view.menu.button) {
			$widgetVariants += this.data.view.menu.button[btn]
				.map(item => `<li class="widgets__variant-add">${item.name}</li>`)
				.join('')
		}

		$widgetsAdd.querySelector('.widgets__variants-add').innerHTML = $widgetVariants
	}

	aside() {
		const $aside = document.querySelector('.aside')
		const $accordion = $aside.querySelector('.accordion')
		$accordion.innerHTML = ''

		for (const key in this.data.view.menu.left) {
			const menuItem = this.data.view.menu.left[key][0]
			let $accordionItem = ''

			if (this.data.view.menu.left[key].length > 1) {
				$accordionItem = `
					<div class="accordion__item">
						<a href="#" class="accordion__item-trigger">
							<div class="accordion__item-title">
								${menuItem.icon}
								<p>${menuItem.name}</p>
							</div>
							<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M3.41438 8.03151C3.67313 7.70806 4.1451 7.65562 4.46855 7.91438L9.00003 11.5396L13.5315 7.91438C13.855 7.65562 14.3269 7.70806 14.5857 8.03151C14.8444 8.35495 14.792 8.82692 14.4685 9.08568L9.46855 13.0857C9.19463 13.3048 8.80542 13.3048 8.53151 13.0857L3.53151 9.08568C3.20806 8.82692 3.15562 8.35495 3.41438 8.03151Z"
									fill="black" />
							</svg>
						</a>
						<div class="accordion__item-body">
							<ul class="accordion__item-list">
								${this.data.view.menu.left[key]
									.map(item => `<li class="accordion__item-link"><a href="#">${item.name}</a></li>`)
									.join('')}
							</ul>
						</div>
					</div>
				`
			} else {
				$accordionItem = `
					<div class="accordion__item">
						<a href="#" class="accordion__item-trigger">
							<div class="accordion__item-title">
								${menuItem.icon}
								<p>${menuItem.name}</p>
							</div>
						</a>
						<div class="accordion__item-body">
						</div>
					</div>
				`
			}

			$accordion.insertAdjacentHTML('beforeend', $accordionItem)
		}

		// Добавление логики аккордеона
		const $accordionTriggers = Array.from($accordion.querySelectorAll('.accordion__item-trigger'))

		$accordionTriggers.forEach($trigger =>
			$trigger.addEventListener('click', () => {
				$trigger.parentElement.classList.toggle('active')
			})
		)
	}

	widgets() {
		const $widgets = document.querySelector('.widgets')

		// Черновик
		const draft = () => {
			const $draft = $widgets.querySelector('#widget-draft')

			$draft.querySelector('#status-in-dev').textContent =
				this.data.group.draft.In_developing + ' блогов'
			$draft.querySelector('#status-pending').textContent =
				this.data.group.draft.Waiting_for_confirmation + ' блогов'
			$draft.querySelector('#status-done').textContent = this.data.group.draft.Archive + ' блогов'
		}

		// Авторские блоги
		const authorBlogs = () => {
			const $author = $widgets.querySelector('#widget-author')
			const $person = $author.querySelector('.person')

			$person.querySelector('img').src = this.data.group.author.icon || 'img/michael.jpg'
			$person.querySelector('.person__title').textContent = this.data.group.author.name
			$person.querySelector('.person__description').textContent = this.data.group.author.template
		}

		// Рабочие блоги
		const workerBlogs = () => {
			const $worker = $widgets.querySelector('#widget-worker')
			const $person = $worker.querySelector('.person')

			$person.querySelector('img').src = this.data.group.worker.icon || 'img/michael.jpg'
			$person.querySelector('.person__title').textContent = this.data.group.worker.name
			$person.querySelector('.person__description').textContent = this.data.group.worker.template
		}

		// Подписчик
		const subscriberBlogs = () => {
			const $subscriber = $widgets.querySelector('#widget-subscriber')
			const $person = $subscriber.querySelector('.person')

			$person.querySelector('img').src = this.data.group.subscriber.icon || 'img/michael.jpg'
			$person.querySelector('.person__title').textContent = this.data.group.subscriber.name
			$person.querySelector('.person__description').textContent = this.data.group.subscriber.template
		}

		draft()
		authorBlogs()
		workerBlogs()
		subscriberBlogs()
	}
}
