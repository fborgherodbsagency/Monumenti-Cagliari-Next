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

const Monumenti11 = (props) => {
  return (
    <>
      <div className="monumenti11-container">
        <Head>
          <title>Monumenti1 - Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti1 - Monumenti Cagliari" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <DataProvider
          renderSuccess={(MonumentiEntity) => (
            <>
              <div className="monumenti11-container01">
                <div className="monumenti11-section-header">
                  <div className="monumenti11-container-centered">
                    <div className="monumenti11-block-region">
                      <div className="monumenti11-region-left">
                        <h1 className="monumenti11-text">
                          {[0]?.name}
                          {MonumentiEntity?.name}
                        </h1>
                        <p className="monumenti11-text01 peragraph-detail">
                          {MonumentiEntity?.posiiton}
                          {[0]?.posiiton}
                        </p>
                      </div>
                      <div className="monumenti11-region-right">
                        <img
                          alt="image"
                          src={MonumentiEntity?.pattern?.url}
                          className="monumenti11-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monumenti11-section-storia">
                  <div className="monumenti11-container02 container-centered">
                    <div className="monumenti11-container03 block-region">
                      <div className="monumenti11-container04">
                        <img
                          alt="image"
                          src={MonumentiEntity?.primaryImage?.url}
                          className="monumenti11-image1"
                        />
                        <div className="monumenti11-container05">
                          <div className="monumenti11-container06">
                            <h2 className="heading2-details">In Breve</h2>
                            <p>
                              {[0]?.noteStoriche}
                              {MonumentiEntity?.noteStoriche}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="monumenti11-container07">
                        <img
                          alt="image"
                          src={MonumentiEntity?.noteStoricheImage?.url}
                          className="monumenti11-image2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monumenti11-section-perch">
                  <div className="container-centered">
                    <div className="block-region">
                      <div className="monumenti11-region-left1">
                        <h2 className="monumenti11-text04 heading2-details">
                          <span className="monumenti11-text05">
                            Perchè visitarlo?
                          </span>
                          <br></br>
                        </h2>
                      </div>
                      <div className="monumenti11-region-right1">
                        <p className="monumenti11-text07">
                          {[0]?.percheVisitarlo}
                          {MonumentiEntity?.percheVisitarlo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monumenti11-section-perch1">
                  <div className="container-centered">
                    <div className="monumenti11-block-region2 block-region">
                      <div className="monumenti11-region-left2">
                        <div className="monumenti11-container08">
                          <div className="monumenti11-container09">
                            <h3 className="monumenti11-text08 heading2-details">
                              <span className="monumenti11-text09">
                                Orari Estivi
                              </span>
                              <br></br>
                            </h3>
                            <div className="rich-text-orari">
                              <RichTextRenderer
                                node={MonumentiEntity?.visitingHours}
                                overwrites={{
                                  documentLink: CaisyDocumentLink,
                                }}
                              ></RichTextRenderer>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="monumenti11-region-right2">
                        <div className="monumenti11-container11">
                          <div className="monumenti11-container12">
                            <h3 className="monumenti11-text11 heading2-details">
                              <span className="monumenti11-text12">
                                Orari Invernali
                              </span>
                              <br></br>
                            </h3>
                            <div className="rich-text-orari">
                              <RichTextRenderer
                                node={MonumentiEntity?.orarioInvernale}
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
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          .monumenti11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .monumenti11-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-section-header {
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
          .monumenti11-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .monumenti11-region-left {
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
          .monumenti11-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .monumenti11-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .monumenti11-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .monumenti11-image {
            width: auto;
            object-fit: cover;
          }
          .monumenti11-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .monumenti11-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .monumenti11-container04 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-image1 {
            width: 100%;
            object-fit: cover;
          }
          .monumenti11-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 0px;
          }
          .monumenti11-container06 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-container07 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .monumenti11-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .monumenti11-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .monumenti11-region-left1 {
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
          .monumenti11-text04 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .monumenti11-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .monumenti11-text07 {
            margin-top: 0px;
          }
          .monumenti11-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .monumenti11-block-region2 {
            justify-content: flex-start;
          }
          .monumenti11-region-left2 {
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
          .monumenti11-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .monumenti11-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-text08 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .monumenti11-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .monumenti11-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .monumenti11-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .monumenti11-text11 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          @media (max-width: 767px) {
            .monumenti11-image {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .monumenti11-section-header {
              height: 100%;
              padding-top: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .monumenti11-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .monumenti11-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .monumenti11-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .monumenti11-text {
              font-size: 2rem;
              text-align: center;
            }
            .monumenti11-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .monumenti11-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .monumenti11-image {
              width: var(--dl-size-size-large);
            }
            .monumenti11-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .monumenti11-container03 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .monumenti11-container04 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .monumenti11-container05 {
              margin-top: 0px;
            }
            .monumenti11-container06 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .monumenti11-container07 {
              flex: 1;
              width: 100%;
            }
            .monumenti11-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .monumenti11-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .monumenti11-text04 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
            }
            .monumenti11-text05 {
              text-align: center;
            }
            .monumenti11-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .monumenti11-text07 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .monumenti11-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .monumenti11-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .monumenti11-text08 {
              text-align: center;
            }
            .monumenti11-text09 {
              text-align: center;
            }
            .monumenti11-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .monumenti11-text11 {
              text-align: center;
            }
            .monumenti11-text12 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Monumenti11.defaultProps = {
  monumentiEntity: [],
}

Monumenti11.propTypes = {
  monumentiEntity: PropTypes.array,
}

export default Monumenti11

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
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
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
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
