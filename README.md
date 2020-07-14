# Landing Page for Hardfork
    
## Tech Specs

A [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website based on [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

### Storybook vs. Gatsby
Gatsby and Storybook have some issues when used in combination.

It is good practice to separate worlds and use dependency injection (DI) to dictate specific behaviour:
  - Add one file for agnostic base component, e.g. `component.tsx`.
  - Add another file for story components, e.g. `stories.tsx`.
  - Add another file for gatsby component, e.g. `index.tsx`.

See [Footer component](https://github.com/hardforkio/homepage/tree/be00bc8be15eb04449228f2299ff2bbf76bd31ff/src/components/Footer) for an example.

#### core-js
One reason for the mismatch is `core-js`. See this open issue for more information: https://github.com/gatsbyjs/gatsby/issues/15601

## User journey focused: About the purpose of this web page.
- Meta: people might come to the actual codebase to check our work.

#### Who comes to the landing page and why?:
- We write applications. (Potential clients do due diligence after receiving an application for a tender)
- Good opportunities also come via personal/professional connections. (Contacts want to contact us for contracting)
- People find us via web search and look at landing page. (Not the priority, rather a bonus. Competition is high and cost benefit ratio is therefore low.)

#### What do people do on our homepage?:

- Due diligence:
    - Legal status (Handelsregister, Rechtsform, Adresse)
    - Legal compliance (Link to Privacy, Imprint Cookies)
    - Technical soundness (No dead links, No broken images, Fast pageload, Certificates)
    - Size/Economic capacity (Number of employees, Yearly revenue) *We will not dislcose number on the homepage. However we aim for an impression of the maximum numbers here without disappointing the customers later.*
    - Technical and domain specific capacity 
        - (past projects, average size of projects - in personhours) *We do not list this. Since we are a growin company, we can only loose by providing this info. Since it looks pretty thin, we will give the wrong impression of our capacity. We postpone this to a later point in time when we have a longer track record to show off*
        - used technologies. Yes, we list those.
        - Provide code and work examples via GitHub
    - Team (No. Levin will elaborate.)

