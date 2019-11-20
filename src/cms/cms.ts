import CMS, { init } from 'netlify-cms-app'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import '../scss/main.scss'

const config = {
  media_folder: 'static/img',
  public_folder: '/img',
  publish_mode: 'editorial_workflow',
  load_config_file: false,
  backend: {
    name: 'git-gateway',
    repo: 'hardforkio/homepage',
    branch: process.env.GATSBY_CMS_BRANCH,
  },
  collections: [
    {
      name: 'imprint',
      label: 'Imprint',
      delete: false,
      files: [
        {
          file: 'src/data/imprint/imprint.json',
          name: 'imprint',
          label: 'Imprint',
          format: 'json',
          identifier_field: 'id',
          fields: [
            {
              name: 'id',
              label: 'Identifier',
              description:
                'A name to identify this object within this collection. Should be unique within the collection.',
              widget: 'hidden',
              default: 'Impressum',
            },
            {
              name: 'translations',
              label: 'translations',
              widget: 'list',
              fields: [
                {
                  name: 'locale',
                  widget: 'select',
                  options: ['en', 'de'],
                },
                {
                  name: 'headline',
                  widget: 'string',
                },
                {
                  name: 'subHeadline',
                  widget: 'string',
                },
                {
                  name: 'metaTitle',
                  widget: 'string',
                },
                {
                  name: 'content',
                  widget: 'markdown',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'faqPage',
      label: 'FaqPage',
      files: [
        {
          file: 'src/data/faqEntry/faq.json',
          format: 'json',
          name: 'faq',
          label: 'FAQ',
          identifier_field: 'id',
          fields: [
            {
              name: 'id',
              label: 'id',
              description:
                'A name to identify this object within this collection. Should be unique within the collection.',
              widget: 'string',
            },
            {
              name: 'translations',
              label: 'translations',
              widget: 'list',
              fields: [
                {
                  name: 'locale',
                  widget: 'select',
                  options: ['en', 'de'],
                },
                {
                  name: 'headline',
                  widget: 'string',
                },
                {
                  name: 'subheadline',
                  widget: 'string',
                },
                {
                  name: 'metaTitle',
                  widget: 'string',
                },
                {
                  name: 'faqEntries',
                  widget: 'list',
                  fields: [
                    {
                      name: 'question',
                      widget: 'string',
                    },
                    {
                      name: 'answer',
                      widget: 'markdown',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'home',
      label: 'Landing Page',
      delete: false,
      files: [
        {
          file: 'src/data/home/home.json',
          name: 'home',
          label: 'Landing Page',
          format: 'json',
          identifier_field: 'id',
          fields: [
            {
              name: 'id',
              label: 'Identifier',
              description:
                'A name to identify this object within this collection. Should be unique within the collection.',
              widget: 'hidden',
              default: 'home',
            },
            {
              name: 'translations',
              label: 'translations',
              widget: 'list',
              fields: [
                {
                  name: 'locale',
                  widget: 'select',
                  options: ['en', 'de'],
                },
                {
                  name: 'title',
                  widget: 'string',
                  label: 'Page title',
                  description: 'Title shown on top of page. Not an ID.',
                },
                {
                  name: 'heading',
                  widget: 'string',
                },
                {
                  name: 'contactHeadline',
                  widget: 'string',
                  description: 'Contact Section Headline',
                },
                {
                  name: 'contactDescription',
                  widget: 'string',
                },
                {
                  name: 'contactButton',
                  widget: 'string',
                },
                {
                  name: 'contactEmail',
                  widget: 'string',
                },
                {
                  name: 'metaTitle',
                  widget: 'string',
                },
                {
                  name: 'metaDescription',
                  widget: 'string',
                },
                {
                  name: 'offerings',
                  label: 'Offerings',
                  widget: 'list',
                  default: [],
                  fields: [
                    {
                      name: 'headline',
                      widget: 'string',
                    },
                    {
                      name: 'image',
                      widget: 'image',
                      allow_multiple: false,
                    },
                    {
                      name: 'text',
                      widget: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

init({ config })
CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
