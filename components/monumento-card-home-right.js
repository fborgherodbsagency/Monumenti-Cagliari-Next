import React from 'react'

import PropTypes from 'prop-types'

const MonumentoCardHomeRight = (props) => {
  return (
    <>
      <div
        className={`monumento-card-home-right-container ${props.rootClassName} `}
      >
        <div className="monumento-card-home-right-container1">
          <div className="monumento-card-home-right-container2">
            <h2>{props.heading}</h2>
            <div className="monumento-card-home-right-container3">
              <span>{props.bullet1}</span>
              <span>{props.bullet2}</span>
              <span>{props.bullet3}</span>
            </div>
          </div>
          <div className="monumento-card-home-right-container4">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="monumento-card-home-right-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .monumento-card-home-right-container {
            width: 100%;
            height: 50vh;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumento-card-home-right-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .monumento-card-home-right-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumento-card-home-right-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumento-card-home-right-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .monumento-card-home-right-image {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

MonumentoCardHomeRight.defaultProps = {
  heading: 'Heading',
  imageAlt: 'image',
  rootClassName: '',
  bullet3: 'Text',
  bullet2: 'Text',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  bullet1: 'Text',
}

MonumentoCardHomeRight.propTypes = {
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  bullet3: PropTypes.string,
  bullet2: PropTypes.string,
  imageSrc: PropTypes.string,
  bullet1: PropTypes.string,
}

export default MonumentoCardHomeRight
