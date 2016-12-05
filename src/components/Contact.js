import React from 'react'
import { css } from 'glamor'

let rule = css({
  height: "100vh"
})

export default function Contact () {
  return (
    <div id='contact' {...rule}>
      <h3>Contact Us</h3>
      <p>Email us at <a href='ma&#105;lt&#111;&#58;c%&#54;F&#110;ta%63t&#64;m&#37;6&#70;o%63f&#101;&#116;c%68%6&#53;r&#46;com'>con&#116;act&#64;mooc&#102;&#101;tcher&#46;c&#111;m</a></p>
    </div>
  )
}
