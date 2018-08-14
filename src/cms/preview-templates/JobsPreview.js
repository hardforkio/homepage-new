/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import {JobsTemplate} from '../../templates/jobs-page'

const JobsPreview = ({entry, widgetFor}) => (
  <JobsTemplate
    content={widgetFor('body')}
    cover={entry.getIn(['data', 'cover'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_desc={entry.getIn(['data', 'meta_description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    slug={entry.getIn(['data', 'slug'])}
  />
)

JobsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default JobsPreview
