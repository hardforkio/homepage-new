import CMS, { init } from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import '../scss/main.scss'

init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: 'hardforkio/homepage',
      branch: process.env.HEAD,
    },
  },
})
CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
