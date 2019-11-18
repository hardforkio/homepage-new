import CMS from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import { TeamPreview } from './preview-templates/TeamPreview'
import '../scss/main.scss'

CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
CMS.registerPreviewTemplate('team', TeamPreview)
