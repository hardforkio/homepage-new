import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'
import { slide as Menu } from 'react-burger-menu'

const NavWrap = styled.div`
  line-height: 1.65em;
  position: fixed;
  top: 0;
  
  div, nav {
    box-sizing: border-box;
  }
  
  & .bm-burger-button {
    border-color: #ffffff;
    height: 18px;
    position: fixed;
    right: 18px;
    top: 14px;
    width: 18px;
    z-index: 10001;
    
    ${media.greaterThan('737px')`
      top: 16px;
    `}
    ${media.greaterThan('981px')`
      top: 18px;
    `}
    ${media.greaterThan('1681px')`
      top: 22px;
    `}
  }
  
  .bm-burger-bars {
    background: #ffffff;
    height: 2px !important;
    opacity: 1 !important;
  }
  
  .bm-menu {
    background: #21b2a6;
    color: #ffffff;
    
  }
  
  .bm-cross-button {
    right: 12px !important;
    height: 18px;
    top: 10px !important;
    width: 18px;
  }
  
  .bm-cross {
    background: #ffffff;
    height: 23px !important;
    width: 2px !important;
  }
  
  .bm-item {
    list-style: none;
    margin: 0 0 2em 0;
    padding: 0;
    
    li {
      border-top: solid 1px rgba(0, 0, 0, 0.125);
      margin: 0.5em 0 0 0;
      padding: 0.5em 0 0 0;
      
      a {
        border: 0;
        color: inherit;
        display: block;
        font-size: 0.8em;
        letter-spacing: 0.225em;
        line-height: 3em;
        outline: 0;
        text-decoration: none;
        text-transform: uppercase;
        
        ${media.greaterThan('981px')`
          line-height: 2.05em;
        `}
      }
      
      &:first-child {
        border-top: 0 !important;
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
    }
  }
  
  .bm-item-list {
    padding: 3em 2em;
  }
`

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <NavWrap>
        <Menu
          right
          width={'20em'}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <ul>
            <li>
              <Link onClick={() => this.closeMenu()} to="/" title="Startseite">
                Startseite
              </Link>
            </li>
            <li>
              <Link onClick={() => this.closeMenu()} to="/jobs" title="Jobs">
                Jobs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => this.closeMenu()}
                to="/#contact"
                title="Kontakt"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </Menu>
      </NavWrap>
    )
  }
}

export default Nav
