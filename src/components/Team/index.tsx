import React, { FunctionComponent } from 'react'
import { Col, Row } from 'reactstrap'

import * as R from 'ramda'

import { SocialIcon } from './SocialIcon'

import { TeamData, SocialMediaData, TeamMemberData } from '../../data/team'

export const TeamMember: FunctionComponent<TeamMemberData> = ({
  name,
  jobTitle,
  avatar,
  socialMedia = [],
}) => (
  <Col sm={6} md={4} lg={3} className="d-flex flex-column mb-5">
    <div className="px-5 px-md-3">
      <img
        className="img-thumbnail w-100 rounded-circle"
        src={avatar}
        alt={`Avatar ${name}`}
      />
    </div>
    <div className="flex-grow-1 mt-3">
      <h6>{name}</h6>
      <p className="text-muted mb-2">{jobTitle}</p>
    </div>
    <ul className="list-inline">
      {R.addIndex<SocialMediaData>(R.map)(
        (iconProps, id) => (
          <SocialIcon key={id.toString()} {...iconProps} />
        ),
        socialMedia,
      )}
    </ul>
  </Col>
)

export const Team: FunctionComponent<TeamData> = ({
  header,
  subheader,
  members = [],
  footer,
}) => (
  <section className="text-center py-5">
    <h2>{header}</h2>
    <h5 className="text-muted mb-5">{subheader}</h5>

    <Row className="justify-content-center">
      {R.addIndex<TeamMemberData>(R.map)(
        (member, id) => (
          <TeamMember key={id.toString()} {...member} />
        ),
        members,
      )}
    </Row>
    <Row>
      <Col lg={{ offset: 3, size: 6 }} md={{ offset: 2, size: 8 }}>
        <p className="text-muted mx-auto">{footer}</p>
      </Col>
    </Row>
  </section>
)
