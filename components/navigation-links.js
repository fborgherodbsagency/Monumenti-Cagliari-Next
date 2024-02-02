import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/home">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            font-size: 2rem;
            font-style: normal;
            font-family: 'Fira Sans';
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
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text: 'Home',
  text4: 'Blog',
  rootClassName: '',
  text3: 'Team',
  text1: 'Eventi',
  text2: 'News',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
