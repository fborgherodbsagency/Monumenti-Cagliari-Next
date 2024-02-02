import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <footer className="footer-footer">
          <div className="footer-container1">
            <img
              alt="logo"
              src="/monumenticagliari-white-1500h.png"
              className="footer-image"
            />
            <img
              alt="logo"
              src="/frame%20(1)-1500h.png"
              className="footer-image1"
            />
          </div>
          <div className="footer-icon-group">
            <div className="footer-container2">
              <img
                alt={props.imageAlt5}
                src={props.imageSrc5}
                className="footer-image2"
              />
              <img
                alt={props.imageAlt51}
                src={props.imageSrc51}
                className="footer-image3"
              />
            </div>
            <div className="footer-container3">
              <div className="footer-container4">
                <span className="footer-text">{props.text5}</span>
                <span className="footer-text1">{props.text51}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 250px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #2b393f;
          }
          .footer-footer {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .footer-container1 {
            height: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            height: 5rem;
          }
          .footer-image1 {
            height: 5rem;
          }
          .footer-icon-group {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .footer-image2 {
            width: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .footer-image3 {
            width: var(--dl-size-size-xsmall);
            object-fit: cover;
          }
          .footer-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .footer-container4 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .footer-text {
            color: #ffffff;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
          }
          .footer-text1 {
            color: #ffffff;
            font-size: 14px;
            margin-top: var(--dl-space-space-unit);
            text-align: right;
            font-family: 'Montserrat';
            font-weight: 400;
          }

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-image1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-image1 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageSrc3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt4: 'image',
  imageSrc51: '/ri_instagram-fill-200h.png',
  rootClassName: '',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  imageSrc4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: 'Text',
  imageSrc5: '/simple-icons_facebook-200h.png',
  text3: 'Text',
  imageAlt5: 'image',
  imageAlt51: 'image',
  text: 'Text',
  imageAlt3: 'image',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text5: 'Privacy & Policy',
  imageAlt2: 'image',
  imageAlt1: 'image',
  text51:
    'Semata Soc. Cooperativa Via Cagliari 66, Dolianova (CA) P.I. 03187730928 REA CA 252695',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: 'Text',
  text4: 'Text',
}

Footer.propTypes = {
  imageSrc3: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc51: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc4: PropTypes.string,
  text1: PropTypes.string,
  imageSrc5: PropTypes.string,
  text3: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt51: PropTypes.string,
  text: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  text5: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  text51: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default Footer
