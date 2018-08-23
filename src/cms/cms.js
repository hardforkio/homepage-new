import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ImprintPagePreview from './preview-templates/ImprintPagePreview'
import PolicyPagePreview from './preview-templates/PolicyPagePreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import JobPreview from './preview-templates/JobPreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('imprint', ImprintPagePreview)
CMS.registerPreviewTemplate('policy', PolicyPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)
CMS.registerPreviewTemplate('jobs', JobPreview)
