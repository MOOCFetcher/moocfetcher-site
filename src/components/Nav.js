import React from 'react'
import { css } from 'glamor'

let block = css({
  display: 'block',
  position: 'fixed',
  top: 0,
  left: 0
})

export default function Nav () {
  return (
    <nav {...block}>
      <h3> Nav Goes Here</h3>
    </nav>
  )
}
