import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CaisyDocumentLink,
} from '@teleporthq/react-components'
import { RichTextRenderer } from '@caisy/rich-text-react-renderer'
import PropTypes from 'prop-types'
import {
  getEntities,
  getEntityByAttribute,
} from '@teleporthq/cms-mappers/caisy'

import Navbar from '../../components/navbar'

const SchedaDettaglioMonumento = (props) => {
  return (
    <>
      <div className="scheda-dettaglio-monumento-container">
        <Head>
          <title>Scheda-Dettaglio-monumento - Monumenti Cagliari</title>
          <meta
            property="og:title"
            content="Scheda-Dettaglio-monumento - Monumenti Cagliari"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <DataProvider
          renderSuccess={(MonumentiEntity) => (
            <>
              <div className="scheda-dettaglio-monumento-container01">
                <div className="location-detail-header">
                  <div className="scheda-dettaglio-monumento-container-centered">
                    <div className="scheda-dettaglio-monumento-block-region">
                      <div className="scheda-dettaglio-monumento-region-left">
                        <h1 className="scheda-dettaglio-monumento-text">
                          {MonumentiEntity?.locationName}
                          {[0]?.name}
                        </h1>
                        <p className="scheda-dettaglio-monumento-text01 peragraph-detail">
                          {MonumentiEntity?.locationAddress}
                        </p>
                      </div>
                      <div className="scheda-dettaglio-monumento-region-right">
                        <img
                          alt="image"
                          src={MonumentiEntity?.locationIcon?.url}
                          className="location-detail-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scheda-dettaglio-monumento-section-storia">
                  <div className="scheda-dettaglio-monumento-container02 container-centered">
                    <div className="scheda-dettaglio-monumento-container03 block-region">
                      <div className="scheda-dettaglio-monumento-container04">
                        <img
                          alt="image"
                          src={MonumentiEntity?.primaryImage?.url}
                          className="scheda-dettaglio-monumento-image1"
                        />
                        <div className="scheda-dettaglio-monumento-container05">
                          <div className="scheda-dettaglio-monumento-container06">
                            <h2 className="heading2-details">In Breve</h2>
                            <p>
                              {[0]?.noteStoriche}
                              {MonumentiEntity?.briefDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="scheda-dettaglio-monumento-container07">
                        <img
                          alt="image"
                          src={MonumentiEntity?.noteStoricheImage?.url}
                          className="scheda-dettaglio-monumento-image2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scheda-dettaglio-monumento-section-perch">
                  <div className="container-centered">
                    <div className="block-region">
                      <div className="scheda-dettaglio-monumento-region-left1"></div>
                      <div className="scheda-dettaglio-monumento-region-right1">
                        <p className="scheda-dettaglio-monumento-text04">
                          text
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scheda-dettaglio-monumento-section-perch1">
                  <div className="container-centered">
                    <div className="scheda-dettaglio-monumento-block-region2 block-region">
                      <div className="scheda-dettaglio-monumento-region-left2">
                        <div className="scheda-dettaglio-monumento-container08">
                          <div className="scheda-dettaglio-monumento-container09">
                            <h3 className="scheda-dettaglio-monumento-text05 heading2-details">
                              <span className="scheda-dettaglio-monumento-text06">
                                Orari Estivi
                              </span>
                              <br></br>
                            </h3>
                            <div className="rich-text-orari">
                              <RichTextRenderer
                                node={MonumentiEntity?.visitingHoursSummer}
                                overwrites={{
                                  documentLink: CaisyDocumentLink,
                                }}
                              ></RichTextRenderer>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="scheda-dettaglio-monumento-region-right2">
                        <div className="scheda-dettaglio-monumento-container11">
                          <div className="scheda-dettaglio-monumento-container12">
                            <h3 className="scheda-dettaglio-monumento-text08 heading2-details">
                              <span className="scheda-dettaglio-monumento-text09">
                                Orari Invernali
                              </span>
                              <br></br>
                            </h3>
                            <div className="rich-text-orari">
                              <RichTextRenderer
                                node={MonumentiEntity?.visitingHoursWinter}
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
          initialData={props.monumentiEntity}
          persistDataDuringLoading={true}
          key={props?.monumentiEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .scheda-dettaglio-monumento-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .scheda-dettaglio-monumento-region-left {
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
          .scheda-dettaglio-monumento-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .scheda-dettaglio-monumento-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .scheda-dettaglio-monumento-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .scheda-dettaglio-monumento-container04 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .scheda-dettaglio-monumento-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
          }
          .scheda-dettaglio-monumento-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-container07 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .scheda-dettaglio-monumento-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .scheda-dettaglio-monumento-region-left1 {
            flex: 0 0 auto;
            width: 50%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
          .scheda-dettaglio-monumento-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-text04 {
            margin-top: 0px;
          }
          .scheda-dettaglio-monumento-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-block-region2 {
            justify-content: flex-start;
          }
          .scheda-dettaglio-monumento-region-left2 {
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
          .scheda-dettaglio-monumento-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-text05 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .scheda-dettaglio-monumento-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .scheda-dettaglio-monumento-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .scheda-dettaglio-monumento-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .scheda-dettaglio-monumento-text08 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          @media (max-width: 479px) {
            .scheda-dettaglio-monumento-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .scheda-dettaglio-monumento-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .scheda-dettaglio-monumento-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .scheda-dettaglio-monumento-text {
              font-size: 2rem;
              text-align: center;
            }
            .scheda-dettaglio-monumento-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .scheda-dettaglio-monumento-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .scheda-dettaglio-monumento-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .scheda-dettaglio-monumento-container03 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .scheda-dettaglio-monumento-container04 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .scheda-dettaglio-monumento-container05 {
              margin-top: 0px;
            }
            .scheda-dettaglio-monumento-container06 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .scheda-dettaglio-monumento-container07 {
              flex: 1;
              width: 100%;
            }
            .scheda-dettaglio-monumento-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .scheda-dettaglio-monumento-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .scheda-dettaglio-monumento-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .scheda-dettaglio-monumento-text04 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .scheda-dettaglio-monumento-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .scheda-dettaglio-monumento-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .scheda-dettaglio-monumento-text05 {
              text-align: center;
            }
            .scheda-dettaglio-monumento-text06 {
              text-align: center;
            }
            .scheda-dettaglio-monumento-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .scheda-dettaglio-monumento-text08 {
              text-align: center;
            }
            .scheda-dettaglio-monumento-text09 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

SchedaDettaglioMonumento.defaultProps = {
  monumentiEntity: [],
}

SchedaDettaglioMonumento.propTypes = {
  monumentiEntity: PropTypes.array,
}

export default SchedaDettaglioMonumento

export async function getStaticPaths() {
  try {
    const response = await getEntities({
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query: '{allMonumenti{edges{node{id}}}}',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await getEntityByAttribute({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationAddress percheVisitarlo briefDescription noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        monumentiEntity: response?.data?.[0],
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
