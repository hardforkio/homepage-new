import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import ImprintPagePreview from './preview-templates/ImprintPagePreview'
import JobPreview from './preview-templates/JobPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('imprint', ImprintPagePreview)
CMS.registerPreviewTemplate('jobs', JobPreview)
