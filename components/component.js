import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <div className="app-component-section-header">
          <div className="app-component-container-centered">
            <div className="app-component-block-region">
              <div className="app-component-region-left">
                <h1 className="app-component-text">{props.heading}</h1>
                <p className="app-component-text01 peragraph-detail">
                  {props.text}
                </p>
              </div>
              <div className="app-component-region-right">
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="app-component-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="app-component-section-storia">
          <div className="app-component-container01 container-centered">
            <div className="app-component-container02 block-region">
              <div className="app-component-container03">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="app-component-image1"
                />
                <div className="app-component-container04">
                  <div className="app-component-container05">
                    <h2 className="heading2-details">{props.heading2}</h2>
                    <p>{props.text2}</p>
                  </div>
                </div>
              </div>
              <div className="app-component-container06">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="app-component-image2"
                />
                <div className="app-component-container07">
                  <h2 className="heading3-details">{props.heading1}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-component-section-perch">
          <div className="container-centered">
            <div className="block-region">
              <div className="app-component-region-left1">
                <h2 className="app-component-text05 heading2-details">
                  <span className="app-component-text06">
                    Perchè visitarlo?
                  </span>
                  <br></br>
                </h2>
              </div>
              <div className="app-component-region-right1">
                <p className="app-component-text08">{props.text1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="app-component-section-perch1">
          <div className="container-centered">
            <div className="app-component-block-region2 block-region">
              <div className="app-component-region-left2">
                <div className="app-component-container08">
                  <div className="app-component-container09">
                    <h3 className="app-component-text09 heading2-details">
                      <span className="app-component-text10">Orari Estivi</span>
                      <br></br>
                    </h3>
                    <div className="rich-text-orari">
                      <cms-richtext className="rich-text-orari"></cms-richtext>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-component-region-right2">
                <div className="app-component-container11">
                  <div className="app-component-container12">
                    <h3 className="app-component-text12 heading2-details">
                      <span className="app-component-text13">
                        Orari Invernali
                      </span>
                      <br></br>
                    </h3>
                    <div className="rich-text-orari">
                      <cms-richtext className="rich-text-orari"></cms-richtext>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .app-component-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-section-header {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #b4ccac;
          }
          .app-component-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .app-component-region-left {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .app-component-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .app-component-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-image {
            width: auto;
            object-fit: cover;
          }
          .app-component-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .app-component-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .app-component-container03 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .app-component-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
          }
          .app-component-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-container06 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .app-component-container07 {
            flex: 0 0 auto;
            display: flex;
            position: absolute;
            background: #c6dbc0;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .app-component-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .app-component-region-left1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-component-text05 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .app-component-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .app-component-text08 {
            margin-top: 0px;
          }
          .app-component-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .app-component-block-region2 {
            justify-content: flex-start;
          }
          .app-component-region-left2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-component-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .app-component-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-text09 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .app-component-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-component-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .app-component-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-text12 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          @media (max-width: 767px) {
            .app-component-image {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .app-component-section-header {
              height: 100%;
              padding-top: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .app-component-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .app-component-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .app-component-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .app-component-text {
              font-size: 2rem;
              text-align: center;
            }
            .app-component-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .app-component-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .app-component-image {
              width: var(--dl-size-size-large);
            }
            .app-component-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .app-component-container02 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .app-component-container03 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .app-component-container04 {
              margin-top: 0px;
            }
            .app-component-container05 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .app-component-container06 {
              flex: 1;
              width: 100%;
            }
            .app-component-container07 {
              display: none;
            }
            .app-component-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .app-component-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .app-component-text05 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
            }
            .app-component-text06 {
              text-align: center;
            }
            .app-component-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .app-component-text08 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .app-component-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .app-component-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .app-component-text09 {
              text-align: center;
            }
            .app-component-text10 {
              text-align: center;
            }
            .app-component-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .app-component-text12 {
              text-align: center;
            }
            .app-component-text13 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  imageAlt1: 'image',
  heading2: 'Note Storiche',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'text',
  imageAlt2: 'image',
  heading1: 'La Storia',
  imageAlt: 'image',
  heading: 'text',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: 'text',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: 'text',
}

AppComponent.propTypes = {
  imageAlt1: PropTypes.string,
  heading2: PropTypes.string,
  imageSrc2: PropTypes.string,
  text: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text2: PropTypes.string,
}

export default AppComponent
