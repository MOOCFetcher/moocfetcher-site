import React from 'react'
import { css } from 'glamor'
import Nav from './Nav'
import Header from './Header'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import Contact from './Contact'

let fadeIn = css.keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1}
})

let animation = css({
  animation: `${fadeIn} 2.0s ease forwards`
})

let topPadding = css({
  '& .section > div': {
    paddingTop: '5rem',
    minHeight: '100vh'
  }
})

export default function Site () {
  return (
    <div className='container' {...animation} {...topPadding}>
      <div className='row'><Nav /></div>
      <div className='row'><Header /></div>
      <div className='row section'><HowItWorks /></div>
      <div className='row section'><FAQ /></div>
      <div className='row section'><Contact /></div>
    </div>
  )
}
