import React, { FunctionComponent } from 'react'
import { Card, CardBody, CardText, Row, Col, Container } from 'reactstrap'
import { mapToComponent } from '../../../utils/helpers'
import * as R from 'ramda'
import { usePathPrefix } from '../../../utils/hooks'
import { ProjectData } from '../../../data/project/types'
import cn from 'classnames'
import styles from './tiles.module.scss'

export const PastProjectsComponent: FunctionComponent<{
  headline: string | undefined
  projects: ProjectData[]
  linkTag: any
}> = ({ headline, projects, linkTag }) => {
  if (hasProjects(projects)) {
    return (
      <section className="bg-indigo py-5">
        <Container>
          <div className="text-center py-5">
            <h3 className="pb-5">{headline ? headline : ''}</h3>
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
    <Col sm={24} md={6} className={cn(styles.features, 'd-flex ')}>
      <Card
        tag={linkTag}
        to={subpagePath}
        className={cn('text-light flex-grow-1 bg-black border-0 p-5')}
      >
        <CardBody className="d-flex flex-column text-left">
          <h5 className="pb-4">{client}</h5>
          <CardText className="flex-grow-1 text-gray-400">{product}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

const hasProjects = R.pipe(R.isEmpty, R.not)
