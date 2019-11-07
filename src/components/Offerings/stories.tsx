import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import Offerings from './index'
import image1 from './pic01.jpg'
import image2 from './pic02.jpg'
import image3 from './pic03.jpg'

const offerings = [
  {
    headline: 'MACHBARKEITSSTUDIEN',
    image: image1,
    text:
      'Sie haben einen Usecase für den Sie eine Lösung auf Basis der Blockchain entwickeln möchten? Wir helfen Ihnen die Umsetzung zu planen, mögliche Risiken frühzeitig zu erkennen und eine erste Einschätzung zu Kosten und Aufwand für Ihre Organisations zu bekommen. Dabei werfen wir auch einen kritischen Blick auf das Konzept und analysieren, ob die Blockchain überhaupt der richtige Lösungsansatz ist.',
  },
  {
    headline: 'FORTBILDUNGEN',
    image: image2,
    text:
      'Sie haben Software-Entwickler im Haus, aber keine Experten in Blockchain und Ethereum? Wir führen Schulungen durch, bei denen Ihre Entwickler die grundlegenden Konzepte der Entwicklung von Blockchain Prototypen und Protokollen erlernen und so das Portfolio Ihres Unternehmens erweitern.',
  },
  {
    headline: 'PROTOTYPING & SMART CONTRACT ENTWICKLUNG',
    image: image3,
    text:
      'Selbstverständlich bieten wir auch die komplette Umsetzung Ihres Projekts an. Unsere erfahrenen Entwickler haben schon zahlreiche Apps für Kunden auf Basis der Blockchain Technologie entwickelt. Dabei legen wir großen Wert auf schnelle Feedback-Loops mit unseren Kunden, so dass Sie schon nach wenigen Tagen eine erste Live-Version haben und Ihr Feedback in die weitere Entwicklung eingehen kann. Wir bieten darüberhinaus auch den Betrieb (Hosting) und die Wartung der Apps an.',
  },
]

storiesOf('Article Header', module).add('default', () => (
  <Offerings offerings={offerings} />
))
