import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import bgimage from '../../img/banner.jpg'

const ArticleHeaderWrap = styled.header`
  background-image: -moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${props => props['data-bgimage']});
  background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${props => props['data-bgimage']});
  background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${props => props['data-bgimage']});
  background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${props => props['data-bgimage']});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 3em;
  padding: 5em 3em 3em 3em;
  text-align: center;
  
  ${media.greaterThan('736px')`
    padding: 10em 3em 8em 3em;
  `}
  ${media.greaterThan('980px')`
    padding: 8em 3em 6em 3em;
  `}
  ${media.greaterThan('1280px')`
    padding: 10em 0 8em 0;
  `}
  ${media.greaterThan('1680px')`
    padding: 12em 0 10em 0;
  `}
  
  h1 {
    color: #fff;
    font-size: 1.25em;
    font-weight: 800;
    letter-spacing: 0.225em;
    line-height: 1.65em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
    
    ${media.greaterThan('736px')`
      font-size: 1.75em;
      line-height: 1.75em
      margin: 0 0 0.5em 0;
    `}
    ${media.greaterThan('980px')`
      
    `}
    ${media.greaterThan('1280px')`
      
    `}
    ${media.greaterThan('1680px')`
      
    `}
  }
  
  p {
    color: inherit;
    letter-spacing: 0.225em;
    margin: 0 0 2em 0;
    text-transform: uppercase;
    top: 0;
    
    ${media.greaterThan('736px')`
      
    `}
    ${media.greaterThan('980px')`
      
    `}
    ${media.greaterThan('1280px')`
      
    `}
    ${media.greaterThan('1680px')`
      
    `}
  }
`

const ArticleHeader = ({ title, subtitle }) => (
  <ArticleHeaderWrap data-bgimage={bgimage}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </ArticleHeaderWrap>
)

ArticleHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default ArticleHeader
