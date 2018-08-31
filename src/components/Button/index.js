import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'gatsby-link'
import scrollToComponent from 'react-scroll-to-component'

const RegularButton = styled(Link)`
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color .2s ease-in-out,color .2s ease-in-out;
  -webkit-transition: background-color .2s ease-in-out,color .2s ease-in-out;
  -ms-transition: background-color .2s ease-in-out,color .2s ease-in-out;
  transition: background-color .2s ease-in-out,color .2s ease-in-out;
  background-color: #ed4933;
  border-radius: 3px;
  border: 0;
  box-shadow: none !important;
  color: #ffffff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  font-weight: 600;
  height: 2.8rem;
  letter-spacing: .225em;
  line-height: 2.8rem;
  margin: 0 auto !important;
  max-width: 30em;
  padding: 0 2.75em;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;
  
  ${media.greaterThan('737px')`
    width: auto;
  `}
  
  &:hover {
    background-color: #ef5e4a !important;
  }
`

const Button = ({ to, label, onClick }) => (
  <RegularButton to={to} title={label} onClick={onClick}>{label}</RegularButton>
)

Button.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button


export const MailButton = RegularButton.withComponent('a')
MailButton.propTypes = Button.propTypes

export const HeaderButton = styled(RegularButton)`
  display: none;
  height: 1.8rem;
  line-height: 1.8rem;
  padding: 0 1em;
  position: absolute;
  right: 4.5em;
  top: 8px;
  width: auto;
  
  ${media.greaterThan('340px')`
     display: block;
  `}
    
  ${media.greaterThan('737px')`
    height: 2.2rem;
    line-height: 2.2rem;
    padding: 0 2.75em;
    right: 4em;
    top: 7px;
  `}
  ${media.greaterThan('981px')`
    height: 2.4rem;
    line-height: 2.4rem;
    top: 7px;
  `}
`
MailButton.propTypes = Button.propTypes
