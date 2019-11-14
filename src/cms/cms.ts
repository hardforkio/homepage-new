import CMS from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'

CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
