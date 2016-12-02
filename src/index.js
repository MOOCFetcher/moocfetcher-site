import React from 'react'
import ReactDOM from 'react-dom'
import { css } from 'glamor'

let rule = css({color: 'red'})

function Welcome (props) {
  return <h1>Hello, <span {...rule}>{props.name}</span></h1>
}

const element = <Welcome name='Deepak' />

ReactDOM.render(
  element,
  document.getElementById('container')
)
