# gatsby-starter-business
A [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website starter based on [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Demo
[Gatsby Starter Business](https://gatsby-starter-business.netlify.com)

## Features
* Complete Business Website Suite - Home Page, About Page, Pricing Page, Contact Page and Blog
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and RSS Feed for Blog
* Disqus and Share Support

## TODO
- Pagination for Blog (gatsby-paginate)
- Search (@andrew-codes/gatsby-plugin-elasticlunr-search)

# Storybook vs. Gatsby
Gatsby and Storybook have some issues when used in combination.

It is good practice to separate worlds and use dependency injection (DI) to dictate specific behaviour:
  - Add one file for agnostic base component, e.g. `component.tsx`.
  - Add another file for story components, e.g. `stories.tsx`.
  - Add another file for gatsby component, e.g. `index.tsx`.

See [Footer component](https://github.com/hardforkio/homepage/tree/be00bc8be15eb04449228f2299ff2bbf76bd31ff/src/components/Footer) for an example.

## core-js
One reason for the mismatch is `core-js`. See this open issue for more information: https://github.com/gatsbyjs/gatsby/issues/15601
