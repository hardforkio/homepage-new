import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ImprintPagePreview from './preview-templates/ImprintPagePreview'
import JobPreview from './preview-templates/JobPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('imprint', ImprintPagePreview)
CMS.registerPreviewTemplate('jobs', JobPreview)
