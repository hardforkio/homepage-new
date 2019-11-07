import React, { FunctionComponent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export enum Platform {
  github = 'github',
  linkedIn = 'linkedIn',
}

export interface SocialIconProps {
  platform: Platform
  url: string
}

const socialMediaIcons: { [type in Platform]: IconProp } = {
  github: faGithub,
  linkedIn: faLinkedinIn,
}

export const SocialIcon: FunctionComponent<SocialIconProps> = ({
  platform,
  url,
}) => (
  <a
    className="list-inline-item px-1"
    href={url}
    title={platform}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={socialMediaIcons[platform]} size="lg" />
  </a>
)
