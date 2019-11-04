import React, { FunctionComponent } from 'react'
import * as R from 'ramda'
import cn from 'classnames'

import styles from './Team.module.scss'
import { Col, Row } from 'reactstrap'

interface TeamMemberProps {
  name: string
  jobTitle: string
  imgSrc: string
}

export const TeamMember: FunctionComponent<TeamMemberProps> = ({
  name,
  jobTitle,
  imgSrc,
}) => (
  <Col md={6} lg={4} className={cn('text-center', styles.teamMember)}>
    <img
      className={cn('img-thumbnail', 'rounded-circle')}
      src={imgSrc}
      alt={`Thumbnail ${name}`}
    />
    <h4>{name}</h4>
    <p className={cn('text-muted')}>{jobTitle}</p>
  </Col>
)

export const Team: FunctionComponent<{ members: TeamMemberProps[] }> = ({
  members,
}) => (
  <div>
    <Row>
      <Col className="text-center">
        <h2 className="text-uppercase">Our Team</h2>
        <h2 className="text-muted">It's a good team.</h2>
      </Col>
    </Row>

    <Row>
      {R.addIndex<TeamMemberProps>(R.map)(
        (member, id) => (
          <TeamMember key={id.toString()} {...member} />
        ),
        members,
      )}
    </Row>

    <Row>
      <Col lg={8} className="mx-auto text-center">
        <p className="large text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
          laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
          ea, alias ut unde.
        </p>
      </Col>
    </Row>
  </div>
)
