import React from 'react'

export default function FAQ () {
  return (
    <div id='faq'>
      <h3>Frequently Asked Questions (FAQs)</h3>
      <dl>
        <dt><p>What MOOC providers do you support?</p></dt>
        <dd><p>We currently support only MOOCs offered by <a href='https://coursera.org'>Coursera</a>.</p></dd>

        <dt><p>What MOOC materials are provided offline?</p></dt>
        <dd><p>For each MOOC, we include the videos of the course and the subtitles in .srt format. For MOOCs which provide them, we also include any additional reading materials in PDF or HTML format.</p></dd>
      </dl>
    </div>
  )
}
