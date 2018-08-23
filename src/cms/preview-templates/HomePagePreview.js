import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryPractices = entry.getIn(['data', 'practices'])
  const practices = entryPractices ? entryPractices.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      offerings={{ blurbs }}
      practices_headline={entry.getIn(['data', 'practices_headline'])}
      practices_description={entry.getIn(['data', 'practices_description'])}
      practices={practices}
      contact_headline={entry.getIn(['data', 'contact_headline'])}
      contact_description={entry.getIn(['data', 'contact_description'])}
      contact_button={entry.getIn(['data', 'contact_button'])}
      contact_email={entry.getIn(['data', 'contact_email'])}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
