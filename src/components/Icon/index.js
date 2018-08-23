import React from 'react';
import * as faBrands from 'styled-icons/fa-brands/index.cjs'
import * as faRegular from 'styled-icons/fa-regular/index.cjs'
import * as faSolid from 'styled-icons/fa-solid/index.cjs'

const Icon = ({name}) => {
  let componentList = {
    Code: faSolid.Code,
    Envelope: faRegular.Envelope,
    Flag: faRegular.Flag,
    Github: faBrands.Github,
    Headphones: faSolid.Headphones,
    Heart: faRegular.Heart,
    Laptop: faSolid.Laptop,
    PaperPlane: faRegular.PaperPlane,
  }
  let IconComponent = componentList[name]
  return (
    <IconComponent />
  )
}

export default Icon

