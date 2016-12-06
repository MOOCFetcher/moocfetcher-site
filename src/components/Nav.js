import React from 'react'
import { css, select as $ } from 'glamor'
import { Link } from 'react-scroll'

let nav = css({
  display: 'block',
  position: 'fixed',
  backgroundColor: '#ededed',
  top: 0,
  left: 0,
  width: '100%',
  height: '5rem'
},
$('& ul', {
  listStyle: 'none',
  margin: 0
}),
$('& ul > li', {
  display: 'inline-block',
  padding: '0 1rem',
  fontSize: '2.4rem',
  cursor: 'pointer'
}),
$('& ul > li > a.active', {
  color: '#606c76'
})
)

export default function Nav () {
  return (
    <nav {...nav}>
      <ul>
        <li><Link to='top' activeClass='active' spy smooth duration={500}>Home</Link></li>
        <li><Link to='howitworks' activeClass='active' spy smooth duration={500}>How It Works</Link></li>
        <li><Link to='faq' activeClass='active' spy smooth duration={500}>FAQs</Link></li>
        <li><Link to='contact' activeClass='active' spy smooth duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  )
}
