import CMS, { init } from 'netlify-cms-app'
import '../scss/main.scss'
import { UuidControl } from './widgets/uuid'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import { FooterPreview } from './preview-templates/FooterPreview'
import { HomePreview } from './preview-templates/HomePreview'
import { TeamPreview } from './preview-templates/TeamPreview'

CMS.registerWidget('uuid', UuidControl)

const config = {
  backend: {
    name: 'git-gateway',
    repo: 'hardforkio/homepage',
    branch: process.env.GATSBY_CMS_BRANCH,
  },
}

init({ config })
CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('team', TeamPreview)
