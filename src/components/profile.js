import React from "react"
import { getUser } from "../services/auth"

const Profile = () => {
	const {name, email} = getUser();
	return  (
		<>
			<h1>Your profile</h1>
			<ul>
				<li>Name: {name}</li>
				<li>E-mail: {email}</li>
			</ul>
		</>
	)
}

export default Profile