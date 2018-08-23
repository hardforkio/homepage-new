import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'

const Offering = styled.section`
  align-items: center;
  display: block;
    
  &:nth-child(1) {
    background-color: rgba(0,0,0,0.075);
  }
  &:nth-child(2) {
      background-color: rgba(0,0,0,0.15);
      -moz-flex-direction: row-reverse;
      -webkit-flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
  }
  &:nth-child(3) {
    background-color: rgba(0,0,0,0.225);
  }
  &:nth-child(4) {
    background-color: rgba(0,0,0,0.075);
    -moz-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  &:nth-child(5) {
      background-color: rgba(0,0,0,0.15);
  }
  &:nth-child(6) {
    background-color: rgba(0,0,0,0.225);
    -moz-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  
  ${media.greaterThan('980px')`
    display: flex;
  `}
`
const OfferingImg = styled.div`
  -moz-order: 1;
  -webkit-order: 1;
  -ms-order: 1;
  order: 1;
  border-radius: 0;
  width: 100%;
  
  img {
    display: block;
    width: 100%;    
  }
  
  ${media.greaterThan('980px')`
    width: 45%;
  `}
  
  ${media.greaterThan('1280px')`
    width: 40%;
  `}
`
const OfferingText = styled.div`
  -moz-order: 2;
  -webkit-order: 2;
  -ms-order: 2;
  order: 2;
  padding: 3em 2em 1em 2em;
  text-align: center;
  width: 100%;
  
  h2 {
    color: #fff;
    font-size: 1.35em;
    font-weight: 800;
    letter-spacing: .225em;
    line-height: 1.75em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
  }
  p {
    margin: 0 0 2em 0;
  }
  
  ${media.greaterThan('736px')`
    padding: 4em 3em 2em 3em;
  `}
  ${media.greaterThan('980px')`
    max-width: 48em;
    text-align: left;
    width: 55%;
  `}
  ${media.greaterThan('1280px')`
    width: 60%;
  `}
`

const Offerings = ({ offerings }) => (
  <div>
    {offerings.map((item, index) => (
      <Offering key={'index' + index}>
        <OfferingImg>
          <img alt='' src={item.image} />
        </OfferingImg>
        <OfferingText>
          <h2>{item.headline}</h2>
          <p>{item.text}</p>
        </OfferingText>
      </Offering>
    ))}
  </div>
)

Offerings.propTypes = {
  offerings: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      headline: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
