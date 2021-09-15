import React from 'react'

import MyNavLink from './MyNavLink'

export default function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="/"><i></i></a>   
        <a href="/"><i></i></a>
        <a href="/"><i></i></a>
      </div>
      <div className="footer-links">
        <MyNavLink to="/home">Contant us</MyNavLink>
        <MyNavLink to="/home">Terms & conditions</MyNavLink>
        <MyNavLink to="/home">Refund police</MyNavLink>
        <MyNavLink to="/home">Stores & stockists</MyNavLink>
        <MyNavLink to="/home">Terms of service</MyNavLink>
      </div>
      <div>
        <p>E.C.Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; High quality online shop in Christchurch since 2016</p>
      </div>
      <div>
        <p>&copy;&nbsp;2021 by Jerry Wang</p>
      </div>
    </footer>
  )
}
