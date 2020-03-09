import '../../scss/main.scss'

import { Link as ReachLink } from '@reach/router'
import { DecoratorFn, storiesOf } from '@storybook/react'
import React from 'react'

import { NavbarComponent } from './component'

const Link = (props: any) => <ReachLink {...props}>{props.children}</ReachLink>

const WithDarkBackground: DecoratorFn = storyFn => (
  <div style={{ backgroundColor: '#646263', height: '200px' }}>{storyFn()}</div>
)

storiesOf('Navbar', module)
  .addDecorator(WithDarkBackground)
  .add('visible', () => (
    <NavbarComponent
      linkTag={Link}
      isTransparent={false}
      contactLinkText="KONTAKT"
      FAQLinkText="FAQ"
      softwareLinkText="SOFTWARE"
      servicesLinkText="DIENSTLEISTUNGEN"
    />
  ))
  .add('transparent', () => (
    <NavbarComponent
      linkTag={Link}
      isTransparent={true}
      contactLinkText="KONTAKT"
      FAQLinkText="FAQ"
      softwareLinkText="SOFTWARE"
      servicesLinkText="DIENSTLEISTUNGEN"
    />
  ))
