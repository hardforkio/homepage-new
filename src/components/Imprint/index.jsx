import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ArticleHeader from '../ArticleHeader/index'
import { data } from '../../data/imprint'
import { ContentWrap } from '../Content/index'

const ImprintComponent = ({
  title,
  subtitle,
  address,
  headline,
  contactHeadline,
  contactPhone,
  contactEmail,
  taxHeadline,
  taxDescription,
  inChargeHeadline,
  inChargePerson,
}) => (
  <article>
    <ArticleHeader title={title} subtitle={subtitle} />
    <ContentWrap>
      <div>
        <h2>{headline}</h2>
        <p>
          {address.name}
          <br />
          {address.street}
          <br />
          {address.city}
        </p>
        <h2>{contactHeadline}</h2>
        <ul>
          <li>Phone: {contactPhone}</li>
          <li>
            Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </li>
        </ul>
        <h2>{taxHeadline}</h2>
        <p>{taxDescription}</p>
        <h2>{inChargeHeadline}</h2>
        <p>
          {inChargePerson}
          <br />
          {address.name}
          <br />
          {address.street}
          <br />
          {address.city}
        </p>
      </div>
    </ContentWrap>
  </article>
)

ImprintComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export const Imprint = () => (
  <div>
    <Helmet>
      <title>{data.meta_title}</title>
      <meta name="description" content={data.meta_description} />
    </Helmet>
    <ImprintComponent {...data} />
  </div>
)

Imprint.propTypes = {
  data: PropTypes.object.isRequired,
}
