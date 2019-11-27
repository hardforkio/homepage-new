import React, { FunctionComponent } from 'react'
import { TitleBanner } from '../../TitleBanner/index'
import { ContentWrap } from '../../Content/index'
import ReactMarkdown from 'react-commonmark'
import { ProjectProps } from '../../../data/home'
import cn from 'classnames'
import { Row, Col } from 'reactstrap'

export const ProjectPageComponent: FunctionComponent<ProjectProps> = ({
  client,
  product,
  application,
  technologies,
  responsibilities,
  image,
}) => (
  <article>
    <TitleBanner title={client} subtitle={product} />
    <ContentWrap>
      <img
        className={cn(image ? image : 'd-none', 'img-fluid pb-5')}
        alt={`Screens ${client}`}
        src={image}
      />
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="pb-5">
          <h5>Applications</h5>
          <ReactMarkdown source={application} />
        </Col>
        <Col xs={12} md={6} className="pb-5">
          <h5>Technologies</h5>
          <ReactMarkdown source={technologies} />
        </Col>
        <Col xs={12} md={6} className="pb-5">
          <h5>Responsibilities</h5>
          <ReactMarkdown source={responsibilities} />
        </Col>
      </Row>
    </ContentWrap>
  </article>
)
