import React, { FunctionComponent } from 'react'
import { Col, Row } from 'reactstrap'
import cn from 'classnames'

import * as R from 'ramda'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export enum Platforms {
  github = 'github',
  linkedIn = 'linkedIn',
}
export type Platform = Platforms

const SocialMediaIcons: { [platform in Platforms]: IconProp } = {
  github: faGithub,
  linkedIn: faLinkedinIn,
}

interface SocialMediaProps {
  platform: Platform
  url: string
}

export interface TeamMemberProps {
  name: string
  jobTitle: string
  avatarUrl: string
  socialMedia: SocialMediaProps[]
}

export interface TeamProps {
  header: string
  subhead: string
  members: TeamMemberProps[]
  footer: string
}

const SocialIcon: FunctionComponent<SocialMediaProps> = ({ platform, url }) => (
  <a
    className="list-inline-item px-1"
    href={url}
    title={platform}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={SocialMediaIcons[platform]} size="lg" />
  </a>
)

export const TeamMember: FunctionComponent<TeamMemberProps> = ({
  name,
  jobTitle,
  avatarUrl,
  socialMedia,
}) => (
  <Col sm={6} md={4} lg={3} className={cn('d-flex flex-column mb-5')}>
    <div className="px-5 px-md-3">
      <img
        className={cn('img-thumbnail', 'rounded-circle', 'w-100')}
        src={avatarUrl}
        alt={`Avatar ${name}`}
      />
    </div>
    <div className="flex-grow-1 mt-3">
      <h5>{name}</h5>
      <p className={cn('text-muted mb-2')}>{jobTitle}</p>
    </div>
    <ul className={cn('list-inline')}>
      {R.addIndex<SocialMediaProps>(R.map)(
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
  <section className={cn('text-center', 'py-5')}>
    <h2>{header}</h2>
    <h3 className={cn('text-muted', 'mb-5')}>{subhead}</h3>

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
        <p className={cn('text-muted mx-auto')}>{footer}</p>
      </Col>
    </Row>
  </section>
)
