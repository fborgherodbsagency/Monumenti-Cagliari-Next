import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container row-location">
        <Link href="/torre-dell-elefante">
          <a>
            <div className="component1-container1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="component1-image"
              />
            </div>
          </a>
        </Link>
        <Link href="/torre-dell-elefante">
          <a>
            <div className="component1-container2 location-title-box">
              <h2 className="component1-text heading2-home">
                {props.heading}
                {[0]?.name}
              </h2>
              <span>{props.text}</span>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .component1-container {
            position: relative;
          }
          .component1-container1 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .component1-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .component1-container2 {
            background-color: #78b9e5;
          }
          .component1-text {
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
          }
          @media (max-width: 479px) {
            .component1-container {
              height: 20vh;
              padding-right: 0px;
            }
            .component1-container1 {
              width: 50%;
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  heading: 'text',
  heading1: 'text',
  text: 'Scopri di più\n',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: 'Scopri di più\n',
  imageAlt: 'image',
}

Component1.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Component1
