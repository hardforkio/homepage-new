import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import bgimage from '../../img/banner.jpg'
import { MailButton } from '../Button'

const CallToActionWrap = styled.section`
  background-image: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props['data-bgimage']});
  background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props['data-bgimage']});
  background-image: -ms-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props['data-bgimage']});
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props['data-bgimage']});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  padding: 3em 2em 1em 2em;

  ${media.greaterThan('981px')`
    padding: 6em 0 4em 0;
  `}

  > div {
    display: block;
    margin: 0 auto;
    max-width: 45em;
    text-align: center;
    width: 100%;

    ${media.greaterThan('981px')`
      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      max-width: 45em;
      width: 90%;
    `}

    ${media.greaterThan('1280px')`
      width: 60em;
      margin: 0 auto;
    `}  
    
    header {
      -moz-order: 1;
      -webkit-order: 1;
      -ms-order: 1;
      order: 1;
      padding: 0;
      width: 100%;

      ${media.greaterThan('981px')`
        padding-right: 3em;
        text-align: left;
        width: 70%;
      `}

      h2 {
        color: #fff;
        font-weight: 800;
        letter-spacing: 0.225em;
        margin: 0 0 1em 0;
        text-transform: uppercase;
        font-size: 1.1em;
        line-height: 1.65em;

        ${media.greaterThan('737px')`
          font-size: 1.35em;
          line-height: 1.75em;
        `}
      }

      p {
        margin: 0 0 2em 0;
      }
    }

    > div {
      cursor: default;
      list-style: none;
      margin: 0 0 2em 0;
      -moz-order: 2;
      -webkit-order: 2;
      -ms-order: 2;
      order: 2;
      padding-left: 0;
      width: 100%;

      ${media.greaterThan('981px')`
        align-items: center;
        display: flex;
        margin: 0;
        width: 30%;
      `}
    }
  }
`

const CallToAction = ({ headline, description, email, button_label, id }) => {
  return (
    <CallToActionWrap data-bgimage={bgimage} id={id}>
      <div>
        <header>
          <h2>{headline}</h2>
          <p>{description}</p>
        </header>
        <div>
          <MailButton href={'mailto:' + email}>{button_label}</MailButton>
        </div>
      </div>
    </CallToActionWrap>
  )
}

export default CallToAction
