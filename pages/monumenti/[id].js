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
import Footer from '../../components/footer'

const Monumenti = (props) => {
  return (
    <>
      <div className="monumenti-container">
        <Head>
          <title>Monumenti - Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti - Monumenti Cagliari" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <DataProvider
          renderSuccess={(MonumentiEntity) => (
            <>
              <div className="monumenti-container01">
                <div className="location-detail-header">
                  <div className="monumenti-container-centered">
                    <div className="monumenti-block-region">
                      <div className="monumenti-region-left">
                        <h1 className="monumenti-text">
                          {MonumentiEntity?.locationName}
                        </h1>
                        <p className="monumenti-text01 peragraph-detail">
                          {MonumentiEntity?.locationAddress}
                        </p>
                      </div>
                      <div className="monumenti-region-right">
                        <img
                          alt="image"
                          src={MonumentiEntity?.locationIcon?.url}
                          className="location-detail-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monumenti-section-storia">
                  <div className="monumenti-container02 container-centered">
                    <div className="monumenti-container03 block-region">
                      <div className="monumenti-container04">
                        <img
                          alt="image"
                          src={MonumentiEntity?.squareImage?.url}
                          className="monumenti-image1"
                        />
                        <div className="monumenti-container05">
                          <div className="monumenti-container06">
                            <h2 className="heading2-details">In Breve</h2>
                            <p>{MonumentiEntity?.briefDescription}</p>
                          </div>
                        </div>
                      </div>
                      <div className="monumenti-container07">
                        <img
                          alt="image"
                          src={MonumentiEntity?.verticalImage?.url}
                          className="monumenti-image2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monumenti-section-detail">
                  <div className="container-centered-correct">
                    <div className="monumenti-block-region1">
                      <div className="monumenti-container08">
                        <RichTextRenderer
                          node={MonumentiEntity?.fullDescription || '--'}
                          overwrites={{
                            documentLink: CaisyDocumentLink,
                          }}
                        ></RichTextRenderer>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monumenti-section-orari">
                  <div className="monumenti-container09 container-centered-correct">
                    <div className="monumenti-region-left1">
                      <div className="monumenti-container10">
                        <h3 className="monumenti-text04 heading2-details">
                          <span className="monumenti-text05">Orari Estivi</span>
                          <br></br>
                        </h3>
                      </div>
                      <div>
                        <RichTextRenderer
                          node={MonumentiEntity?.visitingHoursSummer}
                          overwrites={{
                            documentLink: CaisyDocumentLink,
                          }}
                        ></RichTextRenderer>
                      </div>
                    </div>
                    <div className="monumenti-region-right1">
                      <div className="monumenti-container12">
                        <h3 className="monumenti-text07 heading2-details">
                          <span className="monumenti-text08">
                            Orari Invernali
                          </span>
                          <br></br>
                        </h3>
                      </div>
                      <div>
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
                <div className="monumenti-section-perche">
                  <div className="container-centered">
                    <div className="block-region">
                      <div className="monumenti-region-left2">
                        <h2 className="heading2-details">Perchè visitarlo</h2>
                      </div>
                      <div className="monumenti-region-right2">
                        <div>
                          <RichTextRenderer
                            node={MonumentiEntity?.locationFeatures || '--'}
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
            </>
          )}
          initialData={props.monumentiEntity}
          persistDataDuringLoading={true}
          key={props?.monumentiEntity?.id}
        />
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
      <style jsx>
        {`
          .monumenti-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .monumenti-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .monumenti-region-left {
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
          .monumenti-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .monumenti-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .monumenti-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .monumenti-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            justify-content: center;
          }
          .monumenti-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .monumenti-container04 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .monumenti-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
          }
          .monumenti-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti-container07 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .monumenti-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .monumenti-section-detail {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .monumenti-block-region1 {
            align-self: center;
            padding-top: 4vw;
            padding-left: 9vw;
            padding-right: 9vw;
            padding-bottom: 4vw;
          }
          .monumenti-container08 {
            line-height: 1.6;
          }
          .monumenti-section-orari {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-self: center;
            align-items: flex-start;
            justify-content: center;
          }
          .monumenti-container09 {
            display: flex;
            justify-content: center;
          }
          .monumenti-region-left1 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .monumenti-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .monumenti-text04 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .monumenti-region-right1 {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .monumenti-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .monumenti-text07 {
            font-size: 2.3rem;
            align-self: flex-start;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .monumenti-section-perche {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .monumenti-region-left2 {
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
          .monumenti-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 479px) {
            .monumenti-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .monumenti-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .monumenti-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .monumenti-text {
              font-size: 2rem;
              text-align: center;
            }
            .monumenti-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .monumenti-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .monumenti-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .monumenti-container03 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .monumenti-container04 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .monumenti-container05 {
              margin-top: 0px;
            }
            .monumenti-container06 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .monumenti-container07 {
              flex: 1;
              width: 100%;
            }
            .monumenti-section-detail {
              height: 100%;
              flex-direction: row;
            }
            .monumenti-section-orari {
              height: 100%;
              flex-direction: row;
            }
            .monumenti-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .monumenti-text04 {
              text-align: center;
            }
            .monumenti-text05 {
              text-align: center;
            }
            .monumenti-region-right1 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .monumenti-text07 {
              text-align: center;
            }
            .monumenti-text08 {
              text-align: center;
            }
            .monumenti-section-perche {
              height: 100%;
              flex-direction: row;
            }
            .monumenti-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .monumenti-region-right2 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Monumenti.defaultProps = {
  monumentiEntity: [],
}

Monumenti.propTypes = {
  monumentiEntity: PropTypes.array,
}

export default Monumenti

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
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
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
