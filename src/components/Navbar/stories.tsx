import '../../scss/main.scss'
import React from 'react'
import { storiesOf, DecoratorFn } from '@storybook/react'
import { NavbarComponent } from '.'
import { Link as ReachLink } from '@reach/router'

const Link = (props: any) => <ReachLink {...props}>{props.children}</ReachLink>

const WithDarkBackground: DecoratorFn = storyFn => (
  <div style={{ backgroundColor: '#646263', height: '200px' }}>{storyFn()}</div>
)

storiesOf('Navbar', module)
  .addDecorator(WithDarkBackground)
  .add('default', () => <NavbarComponent linkTag={Link} />)
  .add('transparent', () => (
    <NavbarComponent linkTag={Link} isTransparent={true} />
  ))
