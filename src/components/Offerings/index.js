import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Offering = styled.section`
  align-items: center;
  display: flex;
    
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
`
const OfferingImg = styled.div`
  -moz-order: 1;
  -webkit-order: 1;
  -ms-order: 1;
  order: 1;
  border-radius: 0;
  width: 40%;
  
  img {
    width: 100%;    
  }
`
const OfferingText = styled.div`
  padding: 2em 4em .1em 4em;
  -moz-order: 2;
  -webkit-order: 2;
  -ms-order: 2;
  order: 2;
  max-width: 48em;
  width: 60%;
  
  p {
    margin: 0 0 2em 0;
  }
`

const Offerings = ({ offerings }) => (
  <div>
    {offerings.map((item, index) => (
      <Offering key={'index' + index}>
        <OfferingImg>
          <img alt='' src={item.image} />
        </OfferingImg>
        <OfferingText>
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
      text: PropTypes.string,
    })
  ),
}

export default Offerings
