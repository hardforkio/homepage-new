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

export interface Project {
  client: string
  clientLink: string
  reference: string
  product: string
  application: string
  technologies: string
  responsibilies: string
}

export const PastProjectsComponent: FunctionComponent<{
  headline: string
  projects: Project[]
}> = ({ headline, projects }) => (
  <section className="text-center py-5">
    <h2>{headline}</h2>
    <Row className="justify-content-center py-5">
      {mapToComponent(Project, projects)}
    </Row>
  </section>
)

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
