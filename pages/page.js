import React from 'react'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Monumenti Cagliari</title>
          <meta property="og:title" content="Page - Monumenti Cagliari" />
        </Head>
        <div className="page-container01">
          <div className="location-detail-header">
            <div className="page-container-centered">
              <div className="page-block-region">
                <div className="page-region-left">
                  <h1 className="page-text">kjghkgj</h1>
                  <p className="page-text01 peragraph-detail">gjhghjg</p>
                </div>
                <div className="page-region-right">
                  <img
                    alt="image"
                    src="/frame%2010216-200h.png"
                    className="location-detail-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="page-section-storia">
            <div className="page-container02 container-centered">
              <div className="page-container03 block-region">
                <div className="page-container04">
                  <img
                    alt="image"
                    src="/Monumenti/torre-dell-elefante-1200w.jpg"
                    className="page-image1"
                  />
                  <div className="page-container05">
                    <div className="page-container06">
                      <h2 className="heading2-details">In Breve</h2>
                      <p>kghhjgj</p>
                    </div>
                  </div>
                </div>
                <div className="page-container07">
                  <img
                    alt="image"
                    src="/Monumenti/torre-dell-elefante-1200w.jpg"
                    className="page-image2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="page-section-detail">
            <div className="container-centered">
              <div className="page-block-region1">
                <span>Text</span>
              </div>
            </div>
          </div>
          <div className="page-section-orari">
            <div className="container-centered">
              <div className="page-block-region2 block-region">
                <div className="page-region-left1">
                  <div className="page-container08">
                    <div className="page-container09">
                      <h3 className="page-text05 heading2-details">
                        <span className="page-text06">Orari Estivi</span>
                        <br></br>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="page-region-right1">
                  <div className="page-container10">
                    <div className="page-container11">
                      <h3 className="page-text08 heading2-details">
                        <span className="page-text09">Orari Invernali</span>
                        <br></br>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-section-perche">
            <div className="container-centered">
              <div className="block-region">
                <div className="page-region-left2">
                  <h2 className="heading2-details">Perchè visitarlo</h2>
                </div>
                <div className="page-region-right2">
                  <p className="page-text12">uhjkh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .page-region-left {
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
          .page-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .page-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .page-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .page-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .page-container04 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .page-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
          }
          .page-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container07 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .page-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .page-section-detail {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .page-block-region1 {
            align-self: center;
          }
          .page-section-orari {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .page-block-region2 {
            justify-content: flex-start;
          }
          .page-region-left1 {
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
          .page-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-text05 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .page-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .page-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-text08 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .page-section-perche {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .page-region-left2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text12 {
            margin-top: 0px;
          }
          @media (max-width: 479px) {
            .page-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .page-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .page-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .page-text {
              font-size: 2rem;
              text-align: center;
            }
            .page-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .page-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .page-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .page-container03 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .page-container04 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .page-container05 {
              margin-top: 0px;
            }
            .page-container06 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .page-container07 {
              flex: 1;
              width: 100%;
            }
            .page-section-detail {
              height: 100%;
              flex-direction: row;
            }
            .page-section-orari {
              height: 100%;
              flex-direction: row;
            }
            .page-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .page-text05 {
              text-align: center;
            }
            .page-text06 {
              text-align: center;
            }
            .page-region-right1 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .page-text08 {
              text-align: center;
            }
            .page-text09 {
              text-align: center;
            }
            .page-section-perche {
              height: 100%;
              flex-direction: row;
            }
            .page-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .page-region-right2 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .page-text12 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
