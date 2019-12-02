import React, { FunctionComponent } from 'react'
import {
  Card,
  CardBody,
  CardText,
  Button,
  Row,
  Col,
  CardHeader,
} from 'reactstrap'
import { mapToComponent } from '../../../utils/helpers'
import * as R from 'ramda'
import { usePathPrefix } from '../../../utils/hooks'
import { ProjectProps } from '../../../data/project'

export const PastProjectsComponent: FunctionComponent<{
  headline: string | undefined
  projects: ProjectProps[]
  linkTag: any
}> = ({ headline, projects, linkTag }) => {
  if (hasProjects(projects)) {
    return (
      <div className="text-center py-5">
        <h2>{headline ? headline : ''}</h2>
        <Row className="justify-content-center py-5">
          {mapToComponent(createProjectComponent(linkTag), projects)}
        </Row>
      </div>
    )
  }
  return null
}

const createProjectComponent: (
  linkTag: any,
) => FunctionComponent<ProjectProps> = linkTag => ({
  client,
  product,
  slug,
}) => {
  const subpagePath = usePathPrefix(`/project/${slug}`)
  return (
    <Col sm={24} md={4} className="d-flex flex-column mb-5">
      <Card className="text-dark flex-grow-1">
        <CardHeader>{client}</CardHeader>
        <CardBody className="d-flex flex-column text-left ">
          <CardText className="flex-grow-1">{product}</CardText>
          <Button tag={linkTag} to={subpagePath} color="primary">
            more
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

const hasProjects = R.pipe(R.isEmpty, R.not)
