import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
        <Link href="/">
          <a className="navigation-links-link1">{props.text1}</a>
        </Link>
        <a href="#footer" className="navigation-links-link2">
          {props.text11}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            gap: 40px;
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            font-size: 18px;
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
            text-decoration: none;
          }
          .navigation-links-link1 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
            text-decoration: none;
          }
          .navigation-links-link2 {
            font-size: 18px;
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text: 'Home',
  rootClassName: '',
  text1: 'Download Brochure',
  text11: 'Info e Contatti',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
}

export default NavigationLinks
