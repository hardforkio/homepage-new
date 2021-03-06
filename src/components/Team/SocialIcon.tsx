import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FunctionComponent } from 'react'

import { SocialMediaData } from '../../data/team'

export enum Platform {
  github = 'github',
  linkedIn = 'linkedIn',
}

const socialMediaIcons: { [type in Platform]: IconProp } = {
  github: faGithub,
  linkedIn: faLinkedinIn,
}

const socialMediaUrls: { [type in Platform]: string } = {
  github: 'https://github.com/',
  linkedIn: 'https://www.linkedin.com/in/',
}

export const SocialIcon: FunctionComponent<SocialMediaData> = ({
  platform,
  username,
}) => (
  <a
    className="list-inline-item px-1"
    href={`${socialMediaUrls[platform]}${username}`}
    title={platform}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={socialMediaIcons[platform]} size="lg" />
  </a>
)
