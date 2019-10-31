import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faHeart,
  faFlag,
} from '@fortawesome/free-regular-svg-icons'
import {
  faHeadphones,
  faLaptop,
  faCode,
} from '@fortawesome/free-solid-svg-icons'

export type HomeData = {
  title: string
  heading: string
  offerings: { blurbs: Offering[] }
  practices_headline: string
  practices_description: string
  practices: Practice[]
  contact_headline: string
  contact_description: string
  contact_button: string
  contact_email: string
  meta_title: string
  meta_description: string
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
        headline: 'MACHBARKEITSSTUDIEN',
        image: '/img/pic01.jpg',
        text:
          'Sie haben einen Usecase für den Sie eine Lösung auf Basis der Blockchain entwickeln möchten? Wir helfen Ihnen die Umsetzung zu planen, mögliche Risiken frühzeitig zu erkennen und eine erste Einschätzung zu Kosten und Aufwand für Ihre Organisations zu bekommen. Dabei werfen wir auch einen kritischen Blick auf das Konzept und analysieren, ob die Blockchain überhaupt der richtige Lösungsansatz ist.',
      },
      {
        headline: 'FORTBILDUNGEN',
        image: '/img/pic02.jpg',
        text:
          'Sie haben Software-Entwickler im Haus, aber keine Experten in Blockchain und Ethereum? Wir führen Schulungen durch, bei denen Ihre Entwickler die grundlegenden Konzepte der Entwicklung von Blockchain Prototypen und Protokollen erlernen und so das Portfolio Ihres Unternehmens erweitern.',
      },
      {
        headline: 'PROTOTYPING & SMART CONTRACT ENTWICKLUNG',
        image: '/img/pic03.jpg',
        text:
          'Selbstverständlich bieten wir auch die komplette Umsetzung Ihres Projekts an. Unsere erfahrenen Entwickler haben schon zahlreiche Apps für Kunden auf Basis der Blockchain Technologie entwickelt. Dabei legen wir großen Wert auf schnelle Feedback-Loops mit unseren Kunden, so dass Sie schon nach wenigen Tagen eine erste Live-Version haben und Ihr Feedback in die weitere Entwicklung eingehen kann. Wir bieten darüberhinaus auch den Betrieb (Hosting) und die Wartung der Apps an.',
      },
    ],
  },
  practices_headline: 'Blockchain Software made in Germany',
  practices_description:
    'Die Blockchain kann in vielen Fällen erhebliches Einsparungs- oder Sicherheitspotential bieten. Wir helfen Ihnen diese Potentiale freizulegen. Wir helfen wir Ihnen die Anforderungen und Annahmen kritisch zu hinterfragen und so besonders nachhaltige Lösungen zu produzieren.',
  practices: [
    {
      headline: 'Unabhängigkeit',
      icon: faPaperPlane,
      text:
        'Wir haben keine Favoriten wenn es um das Thema Blockchain geht und glauben auch nicht an Dogmen. Wir nutzen die Technologie, die für den konkreten Fall die besten Ergebnisse verspricht.',
    },
    {
      headline: 'Kritische Analyse',
      icon: faLaptop,
      text:
        'Wir freuen uns über neue Aufträge und Projekte. Allerdings stellen wir beim Thema Blockchain auch übertriebene Erwartungen an die Einsatzmöglichkeiten fest. Wir hinterfragen immer kritisch, ob sich der hohe Entwicklungsaufwand für ein Projekt tatsächlich lohnt und geben Ihnen eine begründete Einschätzung in jedem Einzelfall.',
    },
    {
      headline: 'Agile Entwicklung',
      icon: faCode,
      text:
        'Unsere Erfahrung im Startup-Bereich und mit den Themen Agile, Kanban und Continuous Delivery lässt uns besonders schnell und zielorientiert arbeiten. Sie können jederzeit die Entwicklungsfortschritte selbst auf Ihrem Endgerät erleben und haben so volle Kontrolle über das Projekt.',
    },
    {
      headline: 'Vorträge',
      icon: faHeadphones,
      text:
        'Wir halten regelmäßig Vorträge vor Fachpublikum, aber auch vor Laien mit Interesse am spannenden Thema Blockchain. Wenn Sie zum Beispiel ein Event für Ihre Kunden im Finanzbereich planen, sprechen Sie uns an.',
    },
    {
      headline: 'Reporting Tools',
      icon: faHeart,
      text:
        'Hardfork hat die Software [blooks](https://github.com/blooks) entwickelt, mit der Sie die aktuellen Bestände und Wertentwicklung von Cryptowährungen verfolgen können. Diese steht unter einer Open Source Lizenz zur Verfügung. Gerne helfen wir Ihnen mit der Integration oder Anpassung für Ihre Zwecke. So können Sie auch die buchhalterischen Herausforderungen der Blockchain lösen.',
    },
    {
      headline: 'Partnerschaften',
      icon: faFlag,
      text:
        'Wir arbeiten bereits heute mit Unternehmen zusammen, die zwar eine Expertise im Finanzbereich haben, diese aber gerne gemeinsam mit einem technologisch starken Partner um den Bereich Blockchain erweitern möchten, um noch komplexere Kundenprojekte umzusetzen. Falls Sie Interesse an einer solchen Zusammenarbeit haben, sprechen Sie uns bitte an.',
    },
  ],
  contact_headline: 'Kontaktanfrage',
  contact_description:
    'Bitte schreiben Sie uns eine Email und wir melden uns zurück.',
  contact_button: 'E-Mail senden',
  contact_email: 'contact@hardfork.io',
  meta_title:
    'Hardfork GmbH - Ihr Technologiepartner für anspruchsvolle Softwareprojekte',
  meta_description:
    'Die Blockchain kann in vielen Fällen erhebliches Einsparungs- oder Sicherheitspotential bieten. Wir helfen Ihnen diese Potentiale freizulegen. Wir helfen wir Ihnen die Anforderungen und Annahmen kritisch zu hinterfragen und so besonders nachhaltige Lösungen zu produzieren.',
}
