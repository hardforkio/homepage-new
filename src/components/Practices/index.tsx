import React, { FunctionComponent } from 'react'
import Icon from '../Icon'
import styles from './Practices.module.scss'
import { Practice } from '../../data/home'

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
        {practices.map(
          ({ icon, headline: praticeHeadline, text }: Practice, id: number) => (
            <li key={id}>
              <div className={styles.practicesIcon}>
                <Icon name={icon} />
              </div>
              <h3>{praticeHeadline}</h3>
              <p>{text}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  </section>
)

export default Practices
