import React from 'react'
import Header from '../Header'
import { Content } from './styled'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Layout
