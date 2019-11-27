import React, { FunctionComponent } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
} from 'reactstrap'
import { mapToComponent } from '../../../utils/helpers'
import { ProjectProps } from '../../../data/home'
import * as R from 'ramda'

export const PastProjectsComponent: FunctionComponent<{
  headline: string | undefined
  projects: ProjectProps[]
}> = ({ headline, projects }) => {
  if (hasProjects(projects)) {
    return (
      <div className="text-center py-5">
        <h2>{headline ? headline : ''}</h2>
        <Row className="justify-content-center py-5">
          {mapToComponent(Project, projects)}
        </Row>
      </div>
    )
  }
  return null
}

const Project: FunctionComponent<{ client: string; product: string }> = ({
  client,
  product,
}) => (
  <Col sm={24} md={4} className="d-flex flex-column mb-5">
    <Card className="text-dark flex-grow-1">
      <CardBody className="d-flex flex-column text-left ">
        <CardTitle>{client}</CardTitle>
        <CardText className="flex-grow-1">{product}</CardText>
        <Button color="primary">more</Button>
      </CardBody>
    </Card>
  </Col>
)

const hasProjects = R.pipe(R.isEmpty, R.not)
