import React, { FunctionComponent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Platform, SocialMediaData } from '../../data/team'

const socialMediaIcons: { [type in Platform]: IconProp } = {
  github: faGithub,
  linkedIn: faLinkedinIn,
}

export const SocialIcon: FunctionComponent<SocialMediaData> = ({
  platform,
  username,
}) => (
  <a
    className="list-inline-item px-1"
    href={username}
    title={platform}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={socialMediaIcons[platform]} size="lg" />
  </a>
)
