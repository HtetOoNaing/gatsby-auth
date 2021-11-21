import React from "react"

import NavBar from "./navbar"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default Layout