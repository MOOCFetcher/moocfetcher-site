import React from 'react'
import { css } from 'glamor'
import Nav from './Nav'
import Header from './Header'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

let fadeIn = css.keyframes({
  '0%': { opacity: 0},
  '100%': { opacity: 1}
})

let animation = css({
  animation: `${fadeIn} 2.0s ease forwards`
})

export default function Site () {
  return (
    <div className="container" {...animation}>
      <div className="row"><Nav/></div>
      <div className="row"><Header/></div>
      <div className="row"><HowItWorks/></div>
      <div className="row"><FAQ/></div>
      <div className="row"><Contact/></div>
      <div className="row"><Footer/></div>
  </div>
  )
}
