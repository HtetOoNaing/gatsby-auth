import React from "react"
import { Router } from "@reach/router"
import Login from "../components/login"
import Layout from "../components/layout"
import Profile from "../components/profile"
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <Layout>
    <Router basepath="/app">
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
    </Router>
  </Layout>
)

export default App