import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'

export const ContentWrap = styled.section`
  background-color: #ffffff;
  color: #4e4852;
  padding: 3em 2em 1em 2em;

  ${media.greaterThan('737px')`
      padding: 4em 3em 2em 3em;
  `}
  ${media.greaterThan('981px')`
    padding: 6em 0 4em 0;
  `}
  
  > div {
    margin: 0 auto;
    width: 100%;

    ${media.greaterThan('737px')`
      width: 90%;
    `}
    ${media.greaterThan('981px')`
      width: 60em;
    `}
    
    h2, h3, h4 {
      color: #2e3842;
      font-size: 1em;
      font-weight: 800;
      letter-spacing: 0.225em;
      line-height: 1.65em;
      margin: 0 0 1em 0;
      text-transform: uppercase;

      ${media.greaterThan('737px')`
        font-size: 1.15em;
        line-height: 1.75em;
      `}
    }
    p {
      margin: 0 0 2em 0;
    }
    ul {
      list-style: disc;
      margin: 0 0 2em 0;
      padding-left: 1em;
    }
  }
`

export const HTMLContent = ({ content }) => (
  <ContentWrap>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </ContentWrap>
)

const Content = ({ content }) => (
  <ContentWrap>
    <div>{content}</div>
  </ContentWrap>
)

Content.propTypes = {
  content: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
