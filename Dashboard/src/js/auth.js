import { RenderHTML } from './render'

export class AuthService {
	static async loginFirstTime() {
		const token = window.location.hash.slice(1)

		const requestBody = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				action: 'entry',
				data: JSON.stringify({
					secret_token: token
				})
			})
		}

		return await fetch('https://new.dcpay.ru:8443/api/register.php', requestBody)
			.then(response => response.json())
			.then(({ data }) => {
				AuthService.setTokenToLocalStorage(data.employer.access_token)
				return data
			})
			.catch(() => console.log('! ! ! Redirected ! ! !'))
	}

	static async login() {
		const token = AuthService.getTokenFromLocalStorage()

		const requestBody = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				action: 'entry',
				data: JSON.stringify({
					access_token: token
				})
			})
		}

		return await fetch('https://new.dcpay.ru:8443/api/register.php', requestBody)
			.then(response => response.json())
			.then(({ data }) => data)
			.catch(() => console.log('! ! ! Redirected ! ! !'))
	}

	static setTokenToLocalStorage(token) {
		token && localStorage.setItem('access_token', token)
	}

	static getTokenFromLocalStorage() {
		return localStorage.getItem('access_token') ?? ''
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	let data = null

	// Авторизация
	if (window.location.hash.slice(1)) {
		data = await AuthService.loginFirstTime()
	} else {
		data = await AuthService.login()
	}

	if (!data) return

	// Рендер страницы на основе данных
	const render = new RenderHTML(data)

	render.header()
	render.aside()
	render.addWidgetBtn()
	render.widgets()
})
