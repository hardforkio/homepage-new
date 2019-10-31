import React, { FunctionComponent } from 'react'
import styles from './Practices.module.scss'
import { Practice } from '../../data/home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PracticesProps {
  headline: string
  description: string
  practices: Practice[]
}

export const Practices: FunctionComponent<PracticesProps> = ({
  headline,
  description,
  practices,
}) => (
  <section className={styles.practicesSection}>
    <div className={styles.practicesWrap}>
      <header className={styles.practicesHeader}>
        <h2>{headline}</h2>
        <p>{description}</p>
      </header>
      <ul className={styles.practicesList}>
        {practices.map((practice: Practice, index: number) => (
          <PracticeComponent key={index} {...practice} />
        ))}
      </ul>
    </div>
  </section>
)

const PracticeComponent: FunctionComponent<Practice> = ({
  icon,
  headline,
  text,
}) => (
  <li>
    <div className={styles.praticesIcon}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
    <h3>{headline}</h3>
    <p>{text}</p>
  </li>
)

export default Practices
