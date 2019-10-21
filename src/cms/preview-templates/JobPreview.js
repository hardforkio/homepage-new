/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import { JobTemplate } from '../../templates/job-page'

const JobPreview = ({ entry, widgetFor }) => (
  <JobTemplate
    content={widgetFor('body')}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_desc={entry.getIn(['data', 'meta_description'])}
    title={entry.getIn(['data', 'title'])}
    slug={entry.getIn(['data', 'slug'])}
  />
)

JobPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default JobPreview
