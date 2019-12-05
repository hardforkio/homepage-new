import React, { FunctionComponent, useEffect } from 'react'
import { ContentWrap } from '../../Content/index'
import ReactMarkdown from 'react-commonmark'
import cn from 'classnames'
import { Row, Col, Badge } from 'reactstrap'
import { mapToComponent } from '../../../utils/helpers'
import { Technology } from '../../../data/technology/types'
import { useNavbarState } from '../../../utils/hooks'
import { ProjectData } from '../../../data/project/types'

export const ProjectPageComponent: FunctionComponent<ProjectData> = ({
  client,
  product,
  application,
  usedTechnologies,
  responsibilities,
  image,
}) => {
  const [, setTransparent] = useNavbarState()
  useEffect(() => setTransparent(false))
  return (
    <ContentWrap>
      <div className="text-center mb-5">
        <h2>{client}</h2>
        <h5>{product}</h5>
      </div>
      <img
        className={cn(image ? image : 'd-none', 'img-fluid pb-5')}
        alt={`Screens ${client}`}
        src={image}
      />
      <Row className="justify-content-center ">
        <Col xs={12} md={6} className="pb-5">
          <h5>Applications</h5>
          <ReactMarkdown source={application} />
          <h5>Responsibilities</h5>
          <ReactMarkdown source={responsibilities} />
        </Col>
        <Col xs={12} md={6} className="pb-5">
          <h5>Technologies</h5>
          <ul className="list-inline">
            {mapToComponent(TechTag, usedTechnologies)}{' '}
          </ul>
        </Col>
      </Row>
    </ContentWrap>
  )
}

const TechTag: FunctionComponent<Technology> = ({ name, link }) => (
  <li className="list-inline-item">
    <Badge href={link} color="info" className="mx-2" pill>
      {name}
    </Badge>
  </li>
)
