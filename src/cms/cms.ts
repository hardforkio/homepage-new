import CMS, { init } from 'netlify-cms-app'
import '../scss/main.scss'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import { FooterPreview } from './preview-templates/FooterPreview'
import { HomePreview } from './preview-templates/HomePreview'
import { NavbarPreview } from './preview-templates/NavbarPreview'
import { LocalizedStringWidget } from './widgets/LocalizedString'
import { UuidWidget } from './widgets/Uuid'
import { LOCALES } from './i18n'

const config = {
  backend: {
    name: 'git-gateway',
    repo: 'hardforkio/homepage',
    branch: process.env.GATSBY_CMS_BRANCH,
  },
}

init({ config })

CMS.registerWidget(LocalizedStringWidget(LOCALES))
CMS.registerWidget(UuidWidget())

CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('navbar', NavbarPreview)
