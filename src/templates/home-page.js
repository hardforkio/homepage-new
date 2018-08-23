import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Link from 'gatsby-link'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'
import transition from 'styled-transition-group'
import arrow from '../img/arrow.svg'
import scrollToComponent from 'react-scroll-to-component'

const Intro = styled.section`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  cursor: default;
  height: 100vh;
  min-height: 35em;
  overflow: hidden;
  position: relative;
  text-align: center;
`
const IntroHeadline = transition.h1`
  color: #fff;
  display: inline-block;
  font-size: 1.25em;
  font-weight: 800;
  letter-spacing: .225em;
  line-height: 1.75em;
  margin: 0 0 1em 0;
  opacity: 1;
  padding: .35em 1em;
  position: relative;
  text-transform: uppercase;
  z-index: 1;
  
  ${media.greaterThan('medium')`
    font-size: 1.75em;
  `}
  
  &::before {
    background: #fff;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
    
  &::after {
    background: #fff;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    right: 0;
    width: 100%;
  }
  
  &:enter {
    opacity: 0;
    transform: scale(0.9);
     
    &::after,
    &::before {
      width: 0;
    }
  }
  &:enter-active {
    opacity: 1;
    transform: scale(1);
    transition: transform 0.5s ease, opacity 0.5s ease;
    
    &::after,
    &::before {
      width: 100%;
      transition: width 0.85s ease;
      transition-delay: 0.25s;
    }
    
  }
`
const IntroWrap = styled.div`
  margin: 2em 0 0 0;
  height: 110px;
`
const IntroText = styled.p`
  letter-spacing: 0.225em;
  margin: 0 0 2em 0;
  min-height: 1.75em;
  text-transform: uppercase;  
`
const FadeIn = transition.div`
  opacity: 1;
  
  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 3.5s ease;
  }
`
const Button = styled(Link)`
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color .2s ease-in-out,color .2s ease-in-out;
  -webkit-transition: background-color .2s ease-in-out,color .2s ease-in-out;
  -ms-transition: background-color .2s ease-in-out,color .2s ease-in-out;
  transition: background-color .2s ease-in-out,color .2s ease-in-out;
  background-color: #ed4933;
  border-radius: 3px;
  border: 0;
  box-shadow: none !important;
  color: #ffffff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  font-weight: 600;
  height: 2.8rem;
  letter-spacing: .225em;
  line-height: 2.8rem;
  padding: 0 2.75em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: #ef5e4a !important;
  }
`
const MoreLink = transition.a`
  border: none;
  bottom: 0;
  color: inherit;
  font-size: 0.8em;
  height: 8.5em;
  left: 50%;
  letter-spacing: .225em;
  margin-left: -8.5em;
  opacity: 1;
  outline: 0;
  padding-left: .225em;
  position: absolute;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 16em;
  z-index: 1;
    
  &::after {
    background-image: url(${props => props['data-arrow']});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: 4em;
    content: '';
    display: block;
    height: 1.5em;
    left: 50%;
    margin: 0 0 0 -0.75em;
    position: absolute;
    width: 1.5em;
  }
  
  &:enter {
    opacity: 0;
    transform: translateY(8.5em);
  }
  &:enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: transform 0.75s ease, opacity 0.75s ease;
  }
`

class HomePageTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startAnimation: false,
      startSecondAnimation: false,
      startThirdAnimation: false,
    }
  }

  componentDidMount () {
    this.setState({startAnimation: true})
    setTimeout(function () {
      this.setState({startThirdAnimation: true})
    }.bind(this), 2000)
  }

  render () {
    let scrollConfig = { offset: -52, align: 'top', duration: 700 }
    return (
      <div>
        <Helmet>
          <title>{this.props.meta_title}</title>
          <meta name='description' content={this.props.meta_description} />
        </Helmet>
        <Intro>
          <div>
            <IntroHeadline
              unmountOnExit
              timeout={1000}
              in={this.state.startAnimation}
              onEntered={() => {
                this.setState({startSecondAnimation: true})
              }}
            >
              {this.props.title}
            </IntroHeadline>
            <IntroWrap>
              <FadeIn
                mountOnEnter
                timeout={3500}
                in={this.state.startSecondAnimation}
              >
                <IntroText>{this.props.heading}</IntroText>
                <Button to='/#contact' title='Kontakt' onClick={() => scrollToComponent(this.contact, scrollConfig)}>Kontakt</Button>
              </FadeIn>
            </IntroWrap>
          </div>
          <MoreLink
            href='#offerings'
            data-arrow={arrow}
            onClick={() => scrollToComponent(this.offerings, scrollConfig)}
            mountOnEnter
            timeout={750}
            in={this.state.startThirdAnimation}
          >Mehr</MoreLink>
        </Intro>
        <section id='offerings' ref={(div) => { this.offerings = div }}>
          <Offerings offerings={this.props.offerings.blurbs} />
        </section>
        <section id='contact' ref={(div) => { this.contact = div }}>
          Contact section
        </section>
      </div>
    )
  }
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            headline
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
