import CMS, { init } from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import '../scss/main.scss'

init({
  config: {
    backend: {
      branch: `${process.env.GATSBY_BRANCH}`,
    },
  },
})

CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
