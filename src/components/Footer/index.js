import React from 'react'
import config from '../../config'
import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'gatsby-link'
import Icon from '../Icon'

const Footer = styled.footer`
  background-color: ${props => props.theme.defaultBg};
  color: rgba(255, 255, 255, 0.5);
  padding: 3em 2em 1em 2em;
  text-align: center;

  ${media.greaterThan('981px')`
    padding: 4em 3em 2em 3em;
  `} ${media.greaterThan('981px')`
    padding: 6em 0 4em 0;
  `};
`
const List = styled.ul`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8em;
  letter-spacing: 0.225em;
  list-style: none;
  padding: 0;
  text-transform: uppercase;
`
const ListItem = styled.li`
  border: 0;
  display: block;
  line-height: 1.65em;
  margin: 0;
  padding: 0.5em 0;

  ${media.greaterThan('981px')`
    border-left: solid 1px rgba(255,255,255,0.5);
    display: inline-block;
    line-height: 1em;
    padding: 0 1em 0 1em;
  `};
`
const ListItemFirst = ListItem.extend`
  ${media.greaterThan('981px')` 
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  `};
`
const StyledLink = styled(Link)`
  -moz-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  -webkit-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  -ms-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
  border-bottom: dotted 1px;
  color: inherit;
  text-decoration: none;

  &:hover {
    border-bottom-color: transparent;
    color: white;
  }
`
const ExternalLink = StyledLink.withComponent('a')
const IconList = List.extend`
  margin: 0 0 2em 0;
`
const IconListItem = ListItem.extend`
  display: inline-block;
  padding: 0 1em 0 1em;

  ${media.greaterThan('981px')`
    border: 0;
  `} svg {
    color: rgba(255, 255, 255, 0.5);
    height: 20px;
  }

  a:hover {
    svg {
      color: #fff;
    }
  }
`

export default () => (
  <Footer>
    <IconList>
      <IconListItem>
        <a
          href="https://github.com/hardforkio"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="Github" />
        </a>
      </IconListItem>
      <IconListItem>
        <a href="mailto:contact@hardfork.io" title="Envelope">
          <Icon name="Envelope" />
        </a>
      </IconListItem>
    </IconList>
    <List>
      <ListItemFirst>{config.copyright}</ListItemFirst>
      <ListItem>
        <StyledLink to="/imprint" title="Impressum">
          Impressum
        </StyledLink>
      </ListItem>
      <ListItem>
        Design:{' '}
        <ExternalLink href="https://html5up.net/" target="_blank">
          HTML5 UP
        </ExternalLink>
      </ListItem>
    </List>
  </Footer>
)
