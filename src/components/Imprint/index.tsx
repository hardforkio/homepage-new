import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { ArticleHeader } from '../ArticleHeader/index'
import { data } from '../../data/imprint'
import { ContentWrap } from '../Content/index'

interface Address {
  name: string
  street: string
  city: string
}

interface ImprintProps {
  title: string
  subtitle: string
  address: Address
  headline: string
  contactHeadline: string
  contactPhone: string
  contactEmail: string
  taxHeadline: string
  taxDescription: string
  inChargeHeadline: string
  inChargePerson: string
  legal: string
  court: string
}

const ImprintComponent: FunctionComponent<ImprintProps> = ({
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
  legal,
  court,
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
        <p>{legal}</p>
        <p>{court}</p>
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

export const Imprint = () => (
  <div>
    <Helmet>
      <title>{data.meta_title}</title>
      <meta name="description" content={data.meta_description} />
    </Helmet>
    <ImprintComponent {...data} />
  </div>
)
