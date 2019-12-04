import React, { FunctionComponent } from 'react'
import { Col, Row } from 'reactstrap'
import * as R from 'ramda'
import { SocialIcon, SocialMediaData } from './SocialIcon'
import { TeamData, TeamMemberData } from '../../data/team'
import { mapToComponent } from '../../utils/helpers'

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
      {mapToComponent<SocialMediaData>(SocialIcon, socialMedia)}
    </ul>
  </Col>
)

export const Team: FunctionComponent<TeamData> = ({
  header,
  subheader,
  members = [],
  footer,
}) => {
  if (R.compose(R.not, R.isEmpty)(members)) {
    return (
      <section className="text-center py-5">
        <h2>{header}</h2>
        <h5 className="text-muted mb-5">{subheader}</h5>

        <Row className="justify-content-center">
          {mapToComponent<TeamMemberData>(TeamMember, members)}
        </Row>
        <Row>
          <Col lg={{ offset: 3, size: 6 }} md={{ offset: 2, size: 8 }}>
            <p className="text-muted mx-auto">{footer}</p>
          </Col>
        </Row>
      </section>
    )
  }
  return <></>
}
