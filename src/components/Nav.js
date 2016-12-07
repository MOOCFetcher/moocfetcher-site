import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-scroll'
import matchMedia from 'matchmedia'

let nav = css({
  display: 'block',
  position: 'fixed',
  backgroundColor: '#ededed',
  top: 0,
  left: 0,
  width: '100%',
  height: '5rem',
  '& ul': {
    listStyle: 'none',
    margin: 0
  },
  '& ul > li': {
    display: 'inline-block',
    padding: '0 1rem',
    fontSize: '2.4rem',
    cursor: 'pointer'
  },
  '& ul > li > a.active': {
    color: '#606c76'
  }
})

let navMobile = css({
  display: 'block',
  position: 'fixed',
  backgroundColor: '#ededed',
  top: 0,
  left: 0,
  width: '100%',
  height: '5rem',
  '& ul': {
    display: 'none',
    listStyle: 'none',
    position: 'fixed',
    top: '5rem',
    left: '0.5rem',
    backgroundColor: '#fff',
    margin: 0,
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
  },
  '& ul > li': {
    display: 'block',
    padding: '0 1rem',
    fontSize: '2.4rem',
    cursor: 'pointer'
  },
  '& ul > li > a.active': {
    color: '#606c76'
  }
})

let navbarToggler = css({
  background: 'url(/img/menu.svg) no-repeat center center',
  height: '4rem',
  width: '4rem',
  padding: '0',
  marginLeft: '0.5rem',
  marginTop: '0.5rem',
  '& svg path': {
    stroke: 'transparent',
    fill: '#606c76'
  }
})

export default class Nav extends React.Component {

  render () {
    if (matchMedia('(min-width: 40rem)').matches) {
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
    } else {
      return (
        <nav {...navMobile}>
          <div {...navbarToggler}>
            <svg version='1.1' viewBox='0 0 32 32'>
              <path d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z' />
            </svg>
          </div>
          <ul className='dropdown'>
            <li><Link to='top' activeClass='active' spy smooth duration={500}>Home</Link></li>
            <li><Link to='howitworks' activeClass='active' spy smooth duration={500}>How It Works</Link></li>
            <li><Link to='faq' activeClass='active' spy smooth duration={500}>FAQs</Link></li>
            <li><Link to='contact' activeClass='active' spy smooth duration={500}>Contact Us</Link></li>
          </ul>
        </nav>
      )
    }
  }
}
