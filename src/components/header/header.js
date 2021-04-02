import React from 'react'

import Nav from './nav'
import Clock from '../clock/clock'
import navList from './navList'

const Header = function () {
  return (
    <header className="header">
      <div className="container d-flex">
        <Nav navList={navList} />
        <Clock />
      </div>
    </header>
  )
}
export default Header
