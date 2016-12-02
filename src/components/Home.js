import React from 'react'
import { css } from 'glamor'

let rule = css({color: 'red'})

export default function Home (props) {
  return <h1>Hello, <span {...rule}>{props.name}</span></h1>
}
