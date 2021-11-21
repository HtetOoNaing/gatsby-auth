import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

const Login = () => {
  
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	})

  const handleChange = event => {
    setCredentials({
			...credentials,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin(credentials)
		navigate(`/app/profile`)
  }

	if (isLoggedIn()) {
		navigate(`/app/profile`)
	}

	return (
		<>
			<h1>Log in</h1>
			<form
				method="post"
				onSubmit={handleSubmit}
			>
				<label>
					Username
					<input type="email" name="email" value={credentials.email} onChange={handleChange} />
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						value={credentials.password}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Log In" />
			</form>
		</>
	)

}

export default Login