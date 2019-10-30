import React, { FunctionComponent } from "react"
import config from "../../../config"
import Link from "gatsby-link"

import cn from "classnames"
import styles from "./Footer.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const LegalBar: FunctionComponent = ({ children }) => (
  <div
    className={cn(
      "d-flex",
      "flex-column",
      "flex-md-row",
      "justify-content-center",
      "text-uppercase",
      "text-center",
      styles.spacedLetters
    )}
  >
    {children}
  </div>
)

const LegalItem: FunctionComponent = ({ children }) => (
  <div
    className={cn(
      "px-3",
      styles.verticalSeparatorOnMd,
      styles.darkenTextAndHightlightLinksOnHover
    )}
  >
    {children}
  </div>
)

const Footer = () => (
  <footer className={cn("bg-dark py-3 py-md-5", styles.textGray)}>
    <div className="d-flex mb-4 justify-content-center">
      <div className="px-3">
        <a
          className={cn("border-0")}
          href="https://github.com/hardforkio"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className="px-3">
        <a
          className={cn("border-0")}
          href="mailto:contact@hardfork.io"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
    <LegalBar>
      <LegalItem>{config.copyright}</LegalItem>
      <LegalItem>
        <Link to="/imprint">impressum</Link>
      </LegalItem>
      <LegalItem>
        design:&nbsp;&nbsp;
        <a
          href="https://html5up.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          html5 up
        </a>
      </LegalItem>
    </LegalBar>
  </footer>
)

export default Footer
