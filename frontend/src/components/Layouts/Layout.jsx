import React, { Children } from 'react'
import Header from '../Main/Header'
import Footer from '../Main/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
