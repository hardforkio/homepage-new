import React, { FunctionComponent } from 'react'
import { Container } from 'reactstrap'

export const Text: FunctionComponent<{}> = () => (
  <Container>
    <section>
      <h4>Heading 4</h4>
      <p>
        This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
        <i>italic</i> and this is <em>emphasized</em>. This is{' '}
        <sup>superscript</sup> text and this is <sub>subscript</sub> text. This
        is <u>underlined</u> and this is code: <code>for (;;) {'{ ... }'}</code>
        . Finally, <a href="https://hardfork.io">this is a link</a>.
      </p>
    </section>
  </Container>
)
