import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import Icon from '../Icon'

const PracticesSection = styled.section`
  background-color: rgb(80, 83, 147);
  color: rgb(211, 212, 228);
  padding: 3em 2em 1em 2em;

  ${media.greaterThan('737px')`
    padding: 4em 3em 2em 3em;    
  `}
  ${media.greaterThan('981px')`
    padding: 6em 0 4em 0;    
  `}
`
const PracticesWrap = styled.div`
  width: 100%;
  margin: 0 auto;

  ${media.greaterThan('981px')`
    width: 90%;
  `}

  ${media.greaterThan('1280px')`
    width: 60em;
  `}
`
const PracticesHeader = styled.header`
  margin: 0px 0px 3.5em;
  text-align: center;

  h2 {
    border-bottom: 2px solid rgb(255, 255, 255);
    border-bottom-color: rgba(0, 0, 0, 0.125);
    color: rgb(255, 255, 255);
    display: inline-block;
    font-size: 1.1em;
    line-height: 1.65em;
    font-weight: 800;
    letter-spacing: 0.225em;
    margin: 0px 0px 1em;
    padding-bottom: 1em;
    position: relative;
    text-transform: uppercase;

    ${media.greaterThan('737px')`
      font-size: 1.35em;
      line-height: 1.75em;
    `}
  }
  p {
    margin: 0 0 2em 0;
  }
`
const PracticesList = styled.ul`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  list-style: none;
  margin: 0 0 2em 0;
  padding: 0;
  width: 100%;

  li {
    background-color: transparent;
    border-top: solid 2px #fff;
    border-top-color: rgba(0, 0, 0, 0.125);
    display: block;
    padding: 3em 0 1em 0;
    position: relative;
    text-align: center;
    width: 100%;

    &:first-child {
      border-top: 0;
    }

    ${media.greaterThan('737px')`
      border-top: 0;
      padding: 3em 2em 1em 2em;
      width: 50%;
      
      &:nth-child(1) {
        background-color: rgba(0,0,0,0.035);
      }
      &:nth-child(2) {
        background-color: rgba(0,0,0,0.07);
      }
      &:nth-child(3) {
        background-color: rgba(0,0,0,0.105);
      }
      &:nth-child(4) {
        background-color: rgba(0,0,0,0.14);
      }
      &:nth-child(5) {
        background-color: rgba(0,0,0,0.175);
      }
      &:nth-child(6) {
        background-color: rgba(0,0,0,0.21);
      }
    `}
    ${media.greaterThan('981px')`
      padding: 4em 4em 2em 6em;    
      text-align: left;  
    `}
  }

  h3 {
    color: #fff;
    font-size: 1.15em;
    font-weight: 800;
    letter-spacing: 0.225em;
    line-height: 1.75em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
  }

  p {
    border: 0px none;
    font: inherit;
    hyphens: auto;
    margin: 0 0 2em 0;
    padding: 0px;
    vertical-align: baseline;
  }
`
const PracticeIcon = styled.div`
  margin: 0 0 1em 0;
  position: relative;
  text-align: center;

  ${media.greaterThan('981px')`
    left: 2.5em;
    position: absolute;
    text-align: left;
    top: 4.1em;
  `}

  svg {
    color: rgb(0, 255, 204);
    height: 26px;
    width: 26px;
  }
`

const Practices = ({ headline, description, practices }) => (
  <PracticesSection>
    <PracticesWrap>
      <PracticesHeader>
        <h2>{headline}</h2>
        <p>{description}</p>
      </PracticesHeader>
      <PracticesList>
        {practices.map((practice, id) => (
          <li key={id}>
            <PracticeIcon>
              <Icon name={practice.icon} />
            </PracticeIcon>
            <h3>{practice.headline}</h3>
            <p>{practice.text}</p>
          </li>
        ))}
      </PracticesList>
    </PracticesWrap>
  </PracticesSection>
)

Practices.propTypes = {
  practices: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      headline: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default Practices
