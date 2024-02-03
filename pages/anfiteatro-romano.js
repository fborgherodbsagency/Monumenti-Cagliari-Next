import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CaisyDocumentLink,
} from '@teleporthq/react-components'
import { RichTextRenderer } from '@caisy/rich-text-react-renderer'
import { getEntityByAttribute as getEntityByAttribute10 } from '@teleporthq/cms-mappers/caisy'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const AnfiteatroRomano = (props) => {
  return (
    <>
      <div className="anfiteatro-romano-container">
        <Head>
          <title>Anfiteatro-romano - Monumenti Cagliari</title>
          <meta
            property="og:title"
            content="Anfiteatro-romano - Monumenti Cagliari"
          />
        </Head>
        <Navbar></Navbar>
        <div className="anfiteatro-romano-container01">
          <DataProvider
            renderSuccess={(context_u4as6i) => (
              <>
                <div className="anfiteatro-romano-container02">
                  <div className="anfiteatro-romano-section-header">
                    <div className="anfiteatro-romano-container-centered">
                      <div className="anfiteatro-romano-block-region">
                        <div className="anfiteatro-romano-region-left">
                          <h1 className="anfiteatro-romano-text">
                            {context_u4as6i?.name}
                          </h1>
                          <p className="anfiteatro-romano-text01 peragraph-detail">
                            {context_u4as6i?.posiiton}
                          </p>
                        </div>
                        <div className="anfiteatro-romano-region-right">
                          <img
                            alt="image"
                            src={context_u4as6i?.pattern?.url}
                            className="anfiteatro-romano-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anfiteatro-romano-section-storia">
                    <div className="anfiteatro-romano-container03 container-centered">
                      <div className="anfiteatro-romano-container04 block-region">
                        <div className="anfiteatro-romano-container05">
                          <img
                            alt="image"
                            src={context_u4as6i?.primaryImage?.url}
                            className="anfiteatro-romano-image1"
                          />
                          <div className="anfiteatro-romano-container06">
                            <div className="anfiteatro-romano-container07">
                              <h2 className="heading2-details">In Breve</h2>
                              <p>{context_u4as6i?.noteStoriche}</p>
                            </div>
                          </div>
                        </div>
                        <div className="anfiteatro-romano-container08">
                          <img
                            alt="image"
                            src={context_u4as6i?.noteStoricheImage?.url}
                            className="anfiteatro-romano-image2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anfiteatro-romano-section-perch">
                    <div className="container-centered">
                      <div className="block-region">
                        <div className="anfiteatro-romano-region-left1">
                          <h2 className="anfiteatro-romano-text04 heading2-details">
                            <span className="anfiteatro-romano-text05">
                              Perchè visitarlo?
                            </span>
                            <br></br>
                          </h2>
                        </div>
                        <div className="anfiteatro-romano-region-right1">
                          <p className="anfiteatro-romano-text07">
                            {context_u4as6i?.percheVisitarlo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anfiteatro-romano-section-perch1">
                    <div className="container-centered">
                      <div className="anfiteatro-romano-block-region2 block-region">
                        <div className="anfiteatro-romano-region-left2">
                          <div className="anfiteatro-romano-container09">
                            <div className="anfiteatro-romano-container10">
                              <h3 className="anfiteatro-romano-text08 heading2-details">
                                <span className="anfiteatro-romano-text09">
                                  Orari Estivi
                                </span>
                                <br></br>
                              </h3>
                              <div className="rich-text-orari">
                                <RichTextRenderer
                                  node={context_u4as6i?.visitingHours}
                                  overwrites={{
                                    documentLink: CaisyDocumentLink,
                                  }}
                                ></RichTextRenderer>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="anfiteatro-romano-region-right2">
                          <div className="anfiteatro-romano-container12">
                            <div className="anfiteatro-romano-container13">
                              <h3 className="anfiteatro-romano-text11 heading2-details">
                                <span className="anfiteatro-romano-text12">
                                  Orari Invernali
                                </span>
                                <br></br>
                              </h3>
                              <div className="rich-text-orari">
                                <RichTextRenderer
                                  node={context_u4as6i?.orarioInvernale}
                                  overwrites={{
                                    documentLink: CaisyDocumentLink,
                                  }}
                                ></RichTextRenderer>
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
            renderLoading={() => (
              <>
                <div className="anfiteatro-romano-container15">
                  <div className="anfiteatro-romano-container16">
                    <h1 className="heading1-detail">Loading</h1>
                  </div>
                </div>
              </>
            )}
            initialData={props.contextU4as6iProp}
            persistDataDuringLoading={true}
            key={props?.contextU4as6iProp?.id}
          />
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .anfiteatro-romano-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .anfiteatro-romano-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .anfiteatro-romano-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-section-header {
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
          .anfiteatro-romano-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .anfiteatro-romano-region-left {
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
          .anfiteatro-romano-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .anfiteatro-romano-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .anfiteatro-romano-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .anfiteatro-romano-image {
            width: auto;
            object-fit: cover;
          }
          .anfiteatro-romano-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .anfiteatro-romano-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .anfiteatro-romano-container05 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-image1 {
            width: 100%;
            object-fit: cover;
          }
          .anfiteatro-romano-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 0px;
          }
          .anfiteatro-romano-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-container08 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .anfiteatro-romano-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .anfiteatro-romano-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .anfiteatro-romano-region-left1 {
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
          .anfiteatro-romano-text04 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .anfiteatro-romano-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .anfiteatro-romano-text07 {
            margin-top: 0px;
          }
          .anfiteatro-romano-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .anfiteatro-romano-block-region2 {
            justify-content: flex-start;
          }
          .anfiteatro-romano-region-left2 {
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
          .anfiteatro-romano-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .anfiteatro-romano-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-text08 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .anfiteatro-romano-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .anfiteatro-romano-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .anfiteatro-romano-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anfiteatro-romano-text11 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .anfiteatro-romano-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .anfiteatro-romano-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .anfiteatro-romano-image {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .anfiteatro-romano-section-header {
              height: 100%;
              padding-top: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .anfiteatro-romano-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .anfiteatro-romano-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .anfiteatro-romano-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .anfiteatro-romano-text {
              font-size: 2rem;
              text-align: center;
            }
            .anfiteatro-romano-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .anfiteatro-romano-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .anfiteatro-romano-image {
              width: var(--dl-size-size-large);
            }
            .anfiteatro-romano-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .anfiteatro-romano-container04 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .anfiteatro-romano-container05 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .anfiteatro-romano-container06 {
              margin-top: 0px;
            }
            .anfiteatro-romano-container07 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .anfiteatro-romano-container08 {
              flex: 1;
              width: 100%;
            }
            .anfiteatro-romano-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .anfiteatro-romano-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .anfiteatro-romano-text04 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
            }
            .anfiteatro-romano-text05 {
              text-align: center;
            }
            .anfiteatro-romano-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .anfiteatro-romano-text07 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .anfiteatro-romano-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .anfiteatro-romano-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .anfiteatro-romano-text08 {
              text-align: center;
            }
            .anfiteatro-romano-text09 {
              text-align: center;
            }
            .anfiteatro-romano-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .anfiteatro-romano-text11 {
              text-align: center;
            }
            .anfiteatro-romano-text12 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default AnfiteatroRomano

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
    return {
      props: {
        contextU4as6iProp: contextU4as6iProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
