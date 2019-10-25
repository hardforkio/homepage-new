import React from 'react'
import PropTypes from 'prop-types'
import { data } from '../data/home'
import { HomePageTemplate } from '../components/Home'

const HomePage = () => <HomePageTemplate {...data} />

HomePage.propTypes = {
  data: PropTypes.object,
}

export default HomePage
