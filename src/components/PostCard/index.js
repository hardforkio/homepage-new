import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'styled-media-query'
import * as R from 'ramda'

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
    color: inherit;
  }
`

const PostCardWrap = styled.section`
  background: #fff;
  color: #4e4852;
  padding: 3em 2em 3em 2em;

  ${media.greaterThan('736x')`
    padding: 4em 3em 2em 3em;
  `}
  ${media.greaterThan('980x')`
    padding: 6em 0 4em 0;
  `}
`
const PostCardItem = styled.div`
  border-bottom: solid 2px #dfdfdf;
  margin: 0 auto 3em auto;
  padding: 0 0 3em 0;
  width: 100%;

  ${media.greaterThan('981px')`
    width: 90%;
  `}
  ${media.greaterThan('1280px')`
    width: 60em;
  `}
  
  h2 {
    color: #2e3842;
    font-size: 1em;
    font-weight: 800;
    letter-spacing: 0.225em;
    line-height: 1.5em;
    margin: 0 0 1em 0;
    text-transform: uppercase;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  p {
    margin: 0 0 0 0;
  }
`

export const PostCard = ({ posts }) => (
  <PostCardWrap>
    {R.map(post => (
      <PostCardItem key={post.id}>
        <h2>
          <Link className="has-text-primary" to={post.slug}>
            {post.title}
          </Link>
        </h2>
        <p>
          {getExcerpt(post.skillsDescription)}
          {'... '}
          <StyledLink to={`/jobs/${post.slug}`}>Mehr erfahren →</StyledLink>
        </p>
      </PostCardItem>
    ))(posts)}
  </PostCardWrap>
)

const getExcerpt = R.pipe(
  R.split(''),
  R.slice(0, 120),
  R.join(''),
)
