import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Practices.module.scss'

const Practices = ({ headline, description, practices }) => (
  <section className={styles.practicesSection}>
    <div className={styles.practicesWrap}>
      <header className={styles.practicesHeader}>
        <h2>{headline}</h2>
        <p>{description}</p>
      </header>
      <ul className={styles.practicesList}>
        {practices.map((practice, id) => (
          <li key={id}>
            <div className={styles.practicesIcon}>
              <Icon name={practice.icon} />
            </div>
            <h3>{practice.headline}</h3>
            <p>{practice.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

Practices.propTypes = {
  practices: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      headline: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default Practices
