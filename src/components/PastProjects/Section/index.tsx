import cn from 'classnames'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'

import { ProjectData } from '../../../data/project/types'
import { mapToComponent } from '../../../utils/helpers'
import { usePathPrefix } from '../../../utils/hooks'
import styles from './tiles.module.scss'

export const PastProjectsComponent: FunctionComponent<{
  headline: string | undefined
  projects: ProjectData[]
  linkTag: any
}> = ({ headline, projects, linkTag }) => {
  if (hasProjects(projects)) {
    return (
      <section className="bg-indigo py-5 text-white">
        <Container>
          <div className="text-center py-5">
            <h2 className="pb-5">{headline ? headline : ''}</h2>
            <Row noGutters className={cn('justify-content-center')}>
              {mapToComponent(createProjectComponent(linkTag), projects)}
            </Row>
          </div>
        </Container>
      </section>
    )
  }
  return null
}

const createProjectComponent: (
  linkTag: any,
) => FunctionComponent<ProjectData> = linkTag => ({
  client,
  product,
  slug,
}) => {
  const subpagePath = usePathPrefix(`/project/${slug}`)
  return (
    <Col sm={24} md={6} className={cn(styles.features, 'd-flex')}>
      <Card
        tag={linkTag}
        to={subpagePath}
        className={cn('text-light flex-grow-1 bg-black border-0 p-5')}
      >
        <CardBody className="d-flex flex-column text-left">
          <h3 className="pb-4">{client}</h3>
          <CardText className="flex-grow-1 text-gray-400">{product}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

const hasProjects = R.pipe(R.isEmpty, R.not)
