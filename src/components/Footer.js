import React from 'react'
import { css } from 'glamor'

let spacer = css({
  marginTop: '60vh'
})

let center = css({
  textAlign: 'center'
})

export default function Footer () {
  return (
    <div id='footer' {...spacer}>
      <p {...center}><a rel='license' href='https://creativecommons.org/publicdomain/zero/1.0/'><img src='https://i.creativecommons.org/p/zero/1.0/88x31.png' alt='CC0' height='31' width='88' /></a></p>
    </div>
  )
}
