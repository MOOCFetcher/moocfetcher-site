import React from 'react'
import { css } from 'glamor'

let header = css({
  padding: '20vh 0',
  minHeight: '100vh',
  textAlign: 'center',
  '@media (min-width: 80rem)': {
    padding: '20vh 20%'
  },
  '@media (min-width: 40rem)': {
    padding: '20vh 15%'
  }
})

export default function Header () {
  return (
    <header {...header} id='top'>
      <h1>Experience MOOCs offline.</h1>
      <h5>MOOCFetcher is a volunteer-run, non-commercial and <a href='https://github.com/moocfetcher'>open source</a> effort to bring MOOCs (Massive Online Open Courses) to communities and places without decent internet connections.</h5>
    </header>
  )
}

