import React from 'react'
import { css } from 'glamor'
import Nav from './Nav'
import Header from './Header'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

export default function Site () {
  return (
    <div className="container">
      <div className="row"><Nav/></div>
      <div className="row"><Header/></div>
      <div className="row"><HowItWorks/></div>
      <div className="row"><FAQ/></div>
      <div className="row"><Contact/></div>
      <div className="row"><Footer/></div>
  </div>
  )
}
