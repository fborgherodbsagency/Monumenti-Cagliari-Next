import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CaisyDocumentLink,
} from '@teleporthq/react-components'
import {
  getEntityByAttribute as getEntityByAttribute10,
  getEntityByAttribute as getEntityByAttribute7,
} from '@teleporthq/cms-mappers/caisy'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const CriptaDiSantaRestituta = (props) => {
  return (
    <>
      <div className="cripta-di-santa-restituta-container">
        <Head>
          <title>Cripta-di-Santa-Restituta - Monumenti Cagliari</title>
          <meta
            property="og:title"
            content="Cripta-di-Santa-Restituta - Monumenti Cagliari"
          />
        </Head>
        <Navbar></Navbar>
        <div className="cripta-di-santa-restituta-container01">
          <DataProvider
            renderSuccess={(context_u4as6i) => <></>}
            renderLoading={() => (
              <>
                <div className="cripta-di-santa-restituta-container02">
                  <div className="cripta-di-santa-restituta-container03">
                    <h1 className="heading1-detail">Loading</h1>
                  </div>
                </div>
              </>
            )}
            initialData={props.contextU4as6iProp}
            persistDataDuringLoading={true}
            key={props?.contextU4as6iProp?.id}
          />
          <DataProvider
            renderSuccess={(context_75gp0s) => (
              <>
                <div className="cripta-di-santa-restituta-container04">
                  <div className="cripta-di-santa-restituta-section-header">
                    <div className="cripta-di-santa-restituta-container-centered">
                      <div className="cripta-di-santa-restituta-block-region">
                        <div className="cripta-di-santa-restituta-region-left">
                          <h1 className="cripta-di-santa-restituta-text01">
                            {context_75gp0s?.name}
                          </h1>
                          <p className="cripta-di-santa-restituta-text02 peragraph-detail">
                            text
                          </p>
                        </div>
                        <div className="cripta-di-santa-restituta-region-right">
                          <img
                            alt="image"
                            src={context_75gp0s?.pattern?.url}
                            className="location-detail-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cripta-di-santa-restituta-section-storia">
                    <div className="cripta-di-santa-restituta-container05 container-centered">
                      <div className="cripta-di-santa-restituta-container06 block-region">
                        <div className="cripta-di-santa-restituta-container07">
                          <img
                            alt="image"
                            src={context_75gp0s?.primaryImage?.url}
                            className="cripta-di-santa-restituta-image1"
                          />
                          <div className="cripta-di-santa-restituta-container08">
                            <div className="cripta-di-santa-restituta-container09">
                              <h2 className="heading2-details">In Breve</h2>
                              <p>{context_75gp0s?.noteStoriche}</p>
                            </div>
                          </div>
                        </div>
                        <div className="cripta-di-santa-restituta-container10">
                          <img
                            alt="image"
                            src={context_75gp0s?.noteStoricheImage?.url}
                            className="cripta-di-santa-restituta-image2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cripta-di-santa-restituta-section-perch">
                    <div className="container-centered">
                      <div className="block-region">
                        <div className="cripta-di-santa-restituta-region-left1">
                          <h2 className="cripta-di-santa-restituta-text05 heading2-details">
                            <span className="cripta-di-santa-restituta-text06">
                              Perchè visitarlo?
                            </span>
                            <br></br>
                          </h2>
                        </div>
                        <div className="cripta-di-santa-restituta-region-right1">
                          <p className="cripta-di-santa-restituta-text08">
                            text
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cripta-di-santa-restituta-section-perch1">
                    <div className="container-centered">
                      <div className="cripta-di-santa-restituta-block-region2 block-region">
                        <div className="cripta-di-santa-restituta-region-left2">
                          <div className="cripta-di-santa-restituta-container11">
                            <div className="cripta-di-santa-restituta-container12">
                              <h3 className="cripta-di-santa-restituta-text09 heading2-details">
                                <span className="cripta-di-santa-restituta-text10">
                                  Orari Estivi
                                </span>
                                <br></br>
                              </h3>
                              <div className="rich-text-orari">
                                <cms-richtext className="rich-text-orari"></cms-richtext>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cripta-di-santa-restituta-region-right2">
                          <div className="cripta-di-santa-restituta-container14">
                            <div className="cripta-di-santa-restituta-container15">
                              <h3 className="cripta-di-santa-restituta-text12 heading2-details">
                                <span className="cripta-di-santa-restituta-text13">
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
              </>
            )}
            initialData={props.context75gp0sProp}
            persistDataDuringLoading={true}
            key={props?.context75gp0sProp?.id}
          />
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .cripta-di-santa-restituta-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .cripta-di-santa-restituta-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .cripta-di-santa-restituta-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cripta-di-santa-restituta-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-section-header {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #cdc7d1;
          }
          .cripta-di-santa-restituta-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .cripta-di-santa-restituta-region-left {
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
          .cripta-di-santa-restituta-text01 {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .cripta-di-santa-restituta-text02 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .cripta-di-santa-restituta-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cripta-di-santa-restituta-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .cripta-di-santa-restituta-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .cripta-di-santa-restituta-container07 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .cripta-di-santa-restituta-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
          }
          .cripta-di-santa-restituta-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-container10 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .cripta-di-santa-restituta-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .cripta-di-santa-restituta-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .cripta-di-santa-restituta-region-left1 {
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
          .cripta-di-santa-restituta-text05 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .cripta-di-santa-restituta-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .cripta-di-santa-restituta-text08 {
            margin-top: 0px;
          }
          .cripta-di-santa-restituta-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .cripta-di-santa-restituta-block-region2 {
            justify-content: flex-start;
          }
          .cripta-di-santa-restituta-region-left2 {
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
          .cripta-di-santa-restituta-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cripta-di-santa-restituta-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-text09 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .cripta-di-santa-restituta-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .cripta-di-santa-restituta-container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cripta-di-santa-restituta-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cripta-di-santa-restituta-text12 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          @media (max-width: 479px) {
            .cripta-di-santa-restituta-section-header {
              height: 100%;
              padding-top: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .cripta-di-santa-restituta-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .cripta-di-santa-restituta-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .cripta-di-santa-restituta-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .cripta-di-santa-restituta-text01 {
              font-size: 2rem;
              text-align: center;
            }
            .cripta-di-santa-restituta-text02 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .cripta-di-santa-restituta-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .cripta-di-santa-restituta-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .cripta-di-santa-restituta-container06 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .cripta-di-santa-restituta-container07 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .cripta-di-santa-restituta-container08 {
              margin-top: 0px;
            }
            .cripta-di-santa-restituta-container09 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .cripta-di-santa-restituta-container10 {
              flex: 1;
              width: 100%;
            }
            .cripta-di-santa-restituta-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .cripta-di-santa-restituta-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .cripta-di-santa-restituta-text05 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
            }
            .cripta-di-santa-restituta-text06 {
              text-align: center;
            }
            .cripta-di-santa-restituta-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .cripta-di-santa-restituta-text08 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .cripta-di-santa-restituta-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .cripta-di-santa-restituta-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .cripta-di-santa-restituta-text09 {
              text-align: center;
            }
            .cripta-di-santa-restituta-text10 {
              text-align: center;
            }
            .cripta-di-santa-restituta-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .cripta-di-santa-restituta-text12 {
              text-align: center;
            }
            .cripta-di-santa-restituta-text13 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default CriptaDiSantaRestituta

export async function getStaticProps(context) {
  try {
    const contextU4as6iProp = await getEntityByAttribute10({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
      id: '7b9f7924-0bb9-46dc-81db-6babd9c3c5c2',
    })
    const context75gp0sProp = await getEntityByAttribute7({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
      id: '414395c3-82af-4390-a5b9-724a5f992773',
    })
    return {
      props: {
        contextU4as6iProp: contextU4as6iProp?.data?.[0],
        context75gp0sProp: context75gp0sProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
