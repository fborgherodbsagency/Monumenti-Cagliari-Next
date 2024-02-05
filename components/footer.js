import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div id="footer" className={`footer-container ${props.rootClassName} `}>
        <footer className="footer-footer">
          <div className="footer-container1">
            <img
              alt="logo"
              src="/monumenticagliari-white-1400w.png"
              className="footer-image"
            />
            <div className="footer-container2">
              <img
                alt="logo"
                src="/comunedicagliari-1400w.png"
                className="footer-image1"
              />
              <img
                alt="logo"
                src="/semata-1400w.png"
                className="footer-image2"
              />
            </div>
          </div>
          <div className="footer-icon-group">
            <div className="footer-container3">
              <a
                href="https://www.facebook.com/monumentidicagliaripaginaufficiale"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <img
                  alt={props.imageAlt5}
                  src={props.imageSrc5}
                  className="footer-image3"
                />
              </a>
              <a
                href="https://www.instagram.com/monumentidicagliari?igsh=MXYyaHc0eDlyNm9wcw=="
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                <img
                  alt={props.imageAlt51}
                  src={props.imageSrc51}
                  className="footer-image4"
                />
              </a>
            </div>
            <div className="footer-container4">
              <div className="footer-container5">
                <span className="footer-text">{props.text5}</span>
                <span className="footer-text1">{props.text51}</span>
                <span className="footer-text2">{props.text511}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-color: #2b393f;
          }
          .footer-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            padding-top: var(--dl-space-space-sixunits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
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
            height: 150px;
          }
          .footer-container2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-image1 {
            height: 100px;
          }
          .footer-image2 {
            height: 100px;
          }
          .footer-icon-group {
            gap: var(--dl-space-space-threeunits);
            width: 30%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .footer-link {
            display: contents;
          }
          .footer-image3 {
            width: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-image4 {
            width: var(--dl-size-size-xsmall);
            object-fit: cover;
            text-decoration: none;
          }
          .footer-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .footer-container5 {
            flex: 0 0 auto;
            width: 100%;
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
          .footer-text2 {
            color: #ffffff;
            font-size: 18px;
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
            .footer-image2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-image1 {
              margin-bottom: 0px;
            }
            .footer-image2 {
              margin-bottom: 0px;
            }
            .footer-icon-group {
              width: 100%;
              align-self: center;
            }
            .footer-container3 {
              align-self: center;
              justify-content: center;
            }
            .footer-container5 {
              align-items: center;
            }
            .footer-text {
              text-align: center;
            }
            .footer-text1 {
              text-align: center;
            }
            .footer-text2 {
              text-align: center;
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
  text511: '+39 070 677 7900 info.beniculturalicagliari@gmail.com',
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
  text511: PropTypes.string,
}

export default Footer
