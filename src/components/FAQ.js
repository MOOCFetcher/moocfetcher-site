import React from 'react'
import { css } from 'glamor'

let dl = css({
  '& dt': {
    fontWeight: 'bold'
  }
})
export default function FAQ() {
  return (
    <div id="faq">
      <h3>Frequently Asked Questions&nbsp;(FAQs)</h3>
      <dl {...dl}>
        <dt>
          <p>What MOOC providers do you support?</p>
        </dt>
        <dd>
          <p>
            We currently catalog MOOCs offered by{' '}
            <a href="https://coursera.org">Coursera</a> only.
          </p>
        </dd>
        <dt>
          <p>Aren’t you violoating Coursera’s Terms of Service agreement?</p>
        </dt>
        <dd>
          <p>
            Short answer – Probably not, but we are not lawyers so a disclaimer
            applies.
          </p>
          <p>
            Long answer – We always make sure we tell people that they should
            sign up for Coursera and enroll for the courses, before making use
            of the materials. Moreover, we are doing this on a purely voluntary,
            non-commercial basis. We make no profits, and all our tools are{' '}
            <a href="https://github.com/moocfetcher.">open source</a>.
          </p>
        </dd>
        <dt>
          <p>What MOOC materials are provided offline?</p>
        </dt>
        <dd>
          <p>
            For each MOOC, we include the videos of the course and the subtitles
            in .srt format. For MOOCs which provide them, we also include any
            additional reading materials in PDF or HTML format.
          </p>
        </dd>
        <dt>
          <p>How are the MOOC materials delivered?</p>
        </dt>
        <dd>
          <p>
            MOOC Materials are delivered on a hard drive. Currently, the hard
            drive needs to have at least 2 terabytes of free space. You could
            either ship us the hard drive, or cover the cost of buying and
            shipping a hard drive to you. The hard drive will contain the MOOC
            materials, additional software and documentation to get you started.
          </p>
          <p>
            Email{' '}
            <a href="ma&#105;lt&#111;&#58;c%&#54;F&#110;ta%63t&#64;m&#37;6&#70;o%63f&#101;&#116;c%68%6&#53;r&#46;com">
              con&#116;act&#64;mooc&#102;&#101;tcher&#46;c&#111;m
            </a>{' '}
            for more details.
          </p>
        </dd>
        <dt>
          <p>
            What are the system requirements to operate the software on the hard
            drive.
          </p>
        </dt>
        <dd>
          <p>
            The hard drive can be accessed like any regular external hard drive.
            This should be enough for you to copy course materials if you can
            navigate to the right folders by yourself.
          </p>
          <p>
            We also provide a simple browser based kiosk software which can make
            it easier to search for courses, and copy selected course materials
            to a USB stick to carry with you anywhere. This software has been
            tested on Windows 10, OS X and Ubuntu Linux running inside the
            Google Chrome browser.
          </p>
        </dd>
      </dl>
    </div>
  )
}
