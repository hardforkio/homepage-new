import React, { FunctionComponent } from 'react'
import { Col, Row } from 'reactstrap'

import * as R from 'ramda'

import { SocialIcon, SocialIconProps } from './SocialIcon'

export interface TeamMemberProps {
  name: string
  jobTitle: string
  avatarUrl: string
  socialMedia: SocialIconProps[]
}

export interface TeamProps {
  header: string
  subhead: string
  members: TeamMemberProps[]
  footer: string
}

export const TeamMember: FunctionComponent<TeamMemberProps> = ({
  name,
  jobTitle,
  avatarUrl,
  socialMedia,
}) => (
  <Col sm={6} md={4} lg={3} className="d-flex flex-column mb-5">
    <div className="px-5 px-md-3">
      <img
        className="img-thumbnail w-100 rounded-circle"
        src={avatarUrl}
        alt={`Avatar ${name}`}
      />
    </div>
    <div className="flex-grow-1 mt-3">
      <h5>{name}</h5>
      <p className="text-muted mb-2">{jobTitle}</p>
    </div>
    <ul className="list-inline">
      {R.addIndex<SocialIconProps>(R.map)(
        (iconProps, id) => (
          <SocialIcon key={id.toString()} {...iconProps} />
        ),
        socialMedia,
      )}
    </ul>
  </Col>
)

export const Team: FunctionComponent<TeamProps> = ({
  header,
  subhead,
  members,
  footer,
}) => (
  <section className="text-center py-5">
    <h2>{header}</h2>
    <h3 className="text-muted mb-5">{subhead}</h3>

    <Row className="justify-content-center">
      {R.addIndex<TeamMemberProps>(R.map)(
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
