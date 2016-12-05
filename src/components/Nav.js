import React from 'react'
import { css, select as $ } from 'glamor'

let nav = css({
  display: 'block',
  position: 'fixed',
  background: '#fff',
  top: 0,
  left: 0,
  width: '100%'
},
$('& ul', {
  listStyle: 'none',
  margin: 0
}),
$( '& ul > li', {
  display: 'inline-block',
  padding: '0 1rem',
  fontSize: '2.4rem'
}),
$('& ul > li.active a',{
  color: '#606c76'
})
)

export default function Nav () {
  return (
    <nav {...nav}>
      <ul>
        <li className="active"><a href="#top">Home</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#faq">FAQs</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  )
}
