export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () => isBrowser && window.localStorage.getItem('auth-user') ? JSON.parse(window.localStorage.getItem('auth-user')) : {}

const setUser = (user) => window.localStorage.setItem('auth-user', JSON.stringify(user))

export const handleLogin = ({email, password}) => {
	if(email === 'john@gmail.com' && password === 'password') {
		return setUser({
			name: 'John',
			email: 'john@gmail.com'
		})
	}
	return false
}

export const isLoggedIn = () => {
	const user = getUser();
	return !!user.email
}

export const logout = (callback) => {
	setUser({});
	callback()
}