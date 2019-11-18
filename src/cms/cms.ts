import CMS from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import '../scss/main.scss'

CMS.init({
  config: {
    backend: {
      branch: `feature/issue-191-enable-cms-preview-on-pr-branch`,
    },
  },
})
CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
