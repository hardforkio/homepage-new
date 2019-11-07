import {
  QueryResult,
  getTranslationsFromQuery,
  getTranslation,
  getTranslations,
} from './queryHelpers'
import { Imprint } from './imprint'
import { Locale, Localized } from '.'

const EN: Locale = 'en'
const DE: Locale = 'de'

describe('getTranslationsFromQuery', () => {
  it('selects the desired language version', () => {
    type Word = { word: string }
    const GREETING: Localized<Word> = {
      translations: [
        {
          locale: EN,
          word: 'hello',
        },
        {
          locale: DE,
          word: 'hallo',
        },
      ],
    }
    const PET: Localized<Word> = {
      translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
    }

    const DATA: QueryResult<Word> = {
      allMarkdownRemark: {
        nodes: [
          {
            frontmatter: GREETING,
          },
          {
            frontmatter: PET,
          },
        ],
      },
    }

    expect(getTranslationsFromQuery('de')(DATA)).toEqual([
      { word: 'hallo' },
      { word: 'hund' },
    ])
    expect(getTranslationsFromQuery('en')(DATA)).toEqual([
      { word: 'hello' },
      { word: 'dog' },
    ])
  })

  it('returns an object of the expected type', () => {
    const DATA: QueryResult<Imprint> = {
      allMarkdownRemark: {
        nodes: [
          {
            frontmatter: {
              translations: [
                {
                  content:
                    '### Information pursuant to § 5 TMG:\n\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin\n\nRepresented by: CEO Levin Keller\n\nRegistered at Amtsgericht Charlottenburg as HRB 162146 B\n\n### Contact\n\n- Phone: +4915156041082\n- E-mail: contact@hardfork.io\n\n### Tax\n\nVAT ID: DE297380065\n\n### Responsible for content pursuant to § 55 Abs. 2 RStV:\n\nLevin Keller\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin',
                  headline: 'Imprint',
                  locale: 'en',
                  metaTitle: 'Imprint Hardfork GmbH',
                  subHeadline: 'Hardfork GmbH Berlin',
                },
                {
                  content:
                    '### Angaben gemäß § 5 TMG:\n\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin\n\nVertreten durch: Geschäftsführer Levin Keller\n\nRegistriert am Amtsgericht Charlottenburg unter HRB 162146 B\n\n### Kontakt:\n\n- Telefon: +4915156041082\n- E-mail: contact@hardfork.io\n\n### Umsatzsteuer\n\nUSt-ID: DE297380065\n\n### Verantwortlich für Inhalte nach § 55 Abs. 2 RStV:\n\nLevin Keller\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin',
                  headline: 'Impressum',
                  locale: 'de',
                  metaTitle: 'Impressum Hardform GmbH',
                  subHeadline: 'Hardfork GmbH Berlin',
                },
              ],
            },
          },
        ],
      },
    }
    const expectedEnglish: Imprint[] = [
      {
        content:
          '### Information pursuant to § 5 TMG:\n\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin\n\nRepresented by: CEO Levin Keller\n\nRegistered at Amtsgericht Charlottenburg as HRB 162146 B\n\n### Contact\n\n- Phone: +4915156041082\n- E-mail: contact@hardfork.io\n\n### Tax\n\nVAT ID: DE297380065\n\n### Responsible for content pursuant to § 55 Abs. 2 RStV:\n\nLevin Keller\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin',
        headline: 'Imprint',
        metaTitle: 'Imprint Hardfork GmbH',
        subHeadline: 'Hardfork GmbH Berlin',
      },
    ]

    const expectedGerman: Imprint[] = [
      {
        content:
          '### Angaben gemäß § 5 TMG:\n\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin\n\nVertreten durch: Geschäftsführer Levin Keller\n\nRegistriert am Amtsgericht Charlottenburg unter HRB 162146 B\n\n### Kontakt:\n\n- Telefon: +4915156041082\n- E-mail: contact@hardfork.io\n\n### Umsatzsteuer\n\nUSt-ID: DE297380065\n\n### Verantwortlich für Inhalte nach § 55 Abs. 2 RStV:\n\nLevin Keller\nHardfork GmbH\nMühlenstraße 8a\n14167 Berlin',
        headline: 'Impressum',
        metaTitle: 'Impressum Hardform GmbH',
        subHeadline: 'Hardfork GmbH Berlin',
      },
    ]

    expect(getTranslationsFromQuery('de')(DATA)).toEqual(expectedGerman)
    expect(getTranslationsFromQuery('en')(DATA)).toEqual(expectedEnglish)
  })
})

describe('getTranslation', () => {
  it('selects the desired language version', () => {
    type Word = { word: string }
    const PET: Localized<Word> = {
      translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
    }

    expect(getTranslation(DE)(PET)).toEqual({ word: 'hund' })
    expect(getTranslation(EN)(PET)).toEqual({ word: 'dog' })
  })
})

describe('getTranslations', () => {
  it('gets a list of language versions', () => {
    type Word = { word: string }
    const PET: Localized<Word> = {
      translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
    }

    expect(getTranslations(PET)).toEqual([
      { locale: EN, word: 'dog' },
      { locale: DE, word: 'hund' },
    ])
  })
})
