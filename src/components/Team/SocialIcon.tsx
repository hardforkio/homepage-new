import React, { FunctionComponent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as R from 'ramda'

export enum Platform {
  github = 'github',
  linkedIn = 'linkedIn',
}

export interface SocialMediaData {
  platform: Platform
  username: string
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
    href={R.concat(socialMediaUrls[platform], username)}
    title={platform}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={socialMediaIcons[platform]} size="lg" />
  </a>
)
