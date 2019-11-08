import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type HomeData = {
  title: string
  heading: string
  offerings: { blurbs: Offering[] }
  contactHeadline: string
  contactDescription: string
  contactButton: string
  contactEmail: string
  metaTitle: string
  metaDescription: string
}

export type Offering = {
  headline: string
  image: string
  text: string
}

export type Practice = {
  icon: IconProp
  headline: string
  text: string
}

export const data: HomeData = {
  title: 'Hardfork',
  heading: 'Ihr Partner für anspruchsvolle Softwareprojekte',
  offerings: {
    blurbs: [
      {
        headline: 'Entwicklung',
        image: '/img/pic01.jpg',
        text:
          'Wir entwickeln für Sie Software-Applikationen nach Ihren Vorstellungen. Wir beherrschen dafür alle Notwendigen Teilbereiche vom Frontend über komplexes Application State Management, Client zu Server Kommunikation, Backend-Entwicklung sowie die notwendige Expertise für skalierbaren und sicheren Betrieb in der Cloud. Mit Hardfork bekommen Sie Ihren gesamten Stack aus einer Hand.\n\nWir nutzen unter anderem die Technologien bzw. Libraries React, Redux, TypeScript, Apollo, GraphQL, Gatsby, Netlify, SQL (auch serverless) und AWS serverless.',
      },
      {
        headline: 'Company value',
        image: '/img/pic02.jpg',
        text:
          'Wir verstehen uns nicht als reiner Technologiedienstleister sondern als Partner für das Erreichen von Unternehmenszielen. Durch unseren Hintergrund im Startup-Ökosystem von Berlin wissen wir, dass Software zuallererst Wert für den Kunden generieren muss. Wir berücksichtigen dies sowohl bei den grundlegenden Architekturentscheidungen als auch bei der täglichen Auswahl von Implementierungsdetails, die sich in der Software-Entwicklung ergeben.',
      },
      {
        headline: 'Qualität und Transparenz',
        image: '/img/pic03.jpg',
        text:
          'Bei Hardfork arbeiten ausschließlich hoch ausgebildete Software-Entwickler in Festanstellung. Unsere Arbeit ist für den Kunden zu jeder Zeit einsehbar, die von uns entwickelte Software steht vom ersten Tag an für den Kunden zum Testen zur Verfügung. Wir arbeiten grundsätzlich mit automatisierten Tests, Continous Integration und Deployment und veröffentlichen neuen Code nur im Vier-Augen-Prinzip.',
      },
    ],
  },
  contactHeadline: 'Kontaktanfrage',
  contactDescription:
    'Bitte schreiben Sie uns eine Email und wir melden uns zurück.',
  contactButton: 'E-Mail senden',
  contactEmail: 'contact@hardfork.io',
  metaTitle:
    'Hardfork GmbH - Ihr Technologiepartner für anspruchsvolle Softwareprojekte',
  metaDescription:
    'Die Blockchain kann in vielen Fällen erhebliches Einsparungs- oder Sicherheitspotential bieten. Wir helfen Ihnen diese Potentiale freizulegen. Wir helfen wir Ihnen die Anforderungen und Annahmen kritisch zu hinterfragen und so besonders nachhaltige Lösungen zu produzieren.',
}
