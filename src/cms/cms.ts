import CMS, { init } from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import { FooterPreview } from './preview-templates/FooterPreview'
import '../scss/main.scss'
import { HomePreview } from './preview-templates/HomePreview'
import { NavbarPreview } from './preview-templates/NavbarPreview'
import { createLocalizedStringWidget } from './widgets/LocalizedString'

const LocalizedStringControl = createLocalizedStringWidget(['en', 'de'])

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
CMS.registerPreviewTemplate('navbar', NavbarPreview)

CMS.registerWidget('localizedString', LocalizedStringControl)
