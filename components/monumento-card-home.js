import React from 'react'

import PropTypes from 'prop-types'

const MonumentoCardHome = (props) => {
  return (
    <>
      <div className={`monumento-card-home-container ${props.rootClassName} `}>
        <div className="monumento-card-home-container1">
          <div className="monumento-card-home-container2">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="monumento-card-home-image"
            />
          </div>
          <div className="monumento-card-home-container3">
            <h2>{props.heading}</h2>
            <div className="monumento-card-home-container4">
              <span>{props.bullet1}</span>
              <span>{props.bullet2}</span>
              <span>{props.bullet3}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .monumento-card-home-container {
            width: 100%;
            height: 50vh;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumento-card-home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .monumento-card-home-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumento-card-home-image {
            width: 100%;
            object-fit: cover;
          }
          .monumento-card-home-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: 1rem;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #d9d9d9;
          }
          .monumento-card-home-container4 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

MonumentoCardHome.defaultProps = {
  bullet2: 'Text',
  bullet3: 'Text',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  bullet1: 'Text',
  rootClassName: '',
  heading: 'Heading',
}

MonumentoCardHome.propTypes = {
  bullet2: PropTypes.string,
  bullet3: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  bullet1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default MonumentoCardHome
