import React from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CaisyDocumentLink,
} from '@teleporthq/react-components'
import { RichTextRenderer } from '@caisy/rich-text-react-renderer'
import { getEntityByAttribute as getEntityByAttribute9 } from '@teleporthq/cms-mappers/caisy'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const GrottaDellaVipera = (props) => {
  return (
    <>
      <div className="grotta-della-vipera-container">
        <Head>
          <title>Grotta-della-vipera - Monumenti Cagliari</title>
          <meta
            property="og:title"
            content="Grotta-della-vipera - Monumenti Cagliari"
          />
        </Head>
        <Navbar></Navbar>
        <div className="grotta-della-vipera-container01">
          <DataProvider
            renderSuccess={(context_u4as6i) => (
              <>
                <div className="grotta-della-vipera-container02">
                  <div className="grotta-della-vipera-section-header">
                    <div className="grotta-della-vipera-container-centered">
                      <div className="grotta-della-vipera-block-region">
                        <div className="grotta-della-vipera-region-left">
                          <h1 className="grotta-della-vipera-text">
                            {context_u4as6i?.name}
                          </h1>
                          <p className="grotta-della-vipera-text01 peragraph-detail">
                            {context_u4as6i?.posiiton}
                          </p>
                        </div>
                        <div className="grotta-della-vipera-region-right">
                          <img
                            alt="image"
                            src={context_u4as6i?.pattern?.url}
                            className="grotta-della-vipera-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grotta-della-vipera-section-storia">
                    <div className="grotta-della-vipera-container03 container-centered">
                      <div className="grotta-della-vipera-container04 block-region">
                        <div className="grotta-della-vipera-container05">
                          <img
                            alt="image"
                            src={context_u4as6i?.primaryImage?.url}
                            className="grotta-della-vipera-image1"
                          />
                          <div className="grotta-della-vipera-container06">
                            <div className="grotta-della-vipera-container07">
                              <h2 className="heading2-details">In Breve</h2>
                              <p>{context_u4as6i?.noteStoriche}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grotta-della-vipera-container08">
                          <img
                            alt="image"
                            src={context_u4as6i?.noteStoricheImage?.url}
                            className="grotta-della-vipera-image2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grotta-della-vipera-section-perch">
                    <div className="container-centered">
                      <div className="block-region">
                        <div className="grotta-della-vipera-region-left1">
                          <h2 className="grotta-della-vipera-text04 heading2-details">
                            <span className="grotta-della-vipera-text05">
                              Perchè visitarlo?
                            </span>
                            <br></br>
                          </h2>
                        </div>
                        <div className="grotta-della-vipera-region-right1">
                          <p className="grotta-della-vipera-text07">
                            {context_u4as6i?.percheVisitarlo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grotta-della-vipera-section-perch1">
                    <div className="container-centered">
                      <div className="grotta-della-vipera-block-region2 block-region">
                        <div className="grotta-della-vipera-region-left2">
                          <div className="grotta-della-vipera-container09">
                            <div className="grotta-della-vipera-container10">
                              <h3 className="grotta-della-vipera-text08 heading2-details">
                                <span className="grotta-della-vipera-text09">
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
                        <div className="grotta-della-vipera-region-right2">
                          <div className="grotta-della-vipera-container12">
                            <div className="grotta-della-vipera-container13">
                              <h3 className="grotta-della-vipera-text11 heading2-details">
                                <span className="grotta-della-vipera-text12">
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
                <div className="grotta-della-vipera-container15">
                  <div className="grotta-della-vipera-container16">
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
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .grotta-della-vipera-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .grotta-della-vipera-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .grotta-della-vipera-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-section-header {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #79d19c;
          }
          .grotta-della-vipera-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .grotta-della-vipera-region-left {
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
          .grotta-della-vipera-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .grotta-della-vipera-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .grotta-della-vipera-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .grotta-della-vipera-image {
            width: 100%;
            max-width: 300px;
            object-fit: cover;
          }
          .grotta-della-vipera-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .grotta-della-vipera-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .grotta-della-vipera-container05 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .grotta-della-vipera-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 0px;
          }
          .grotta-della-vipera-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-container08 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .grotta-della-vipera-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .grotta-della-vipera-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .grotta-della-vipera-region-left1 {
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
          .grotta-della-vipera-text04 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .grotta-della-vipera-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .grotta-della-vipera-text07 {
            margin-top: 0px;
          }
          .grotta-della-vipera-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .grotta-della-vipera-block-region2 {
            justify-content: flex-start;
          }
          .grotta-della-vipera-region-left2 {
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
          .grotta-della-vipera-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .grotta-della-vipera-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-text08 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .grotta-della-vipera-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .grotta-della-vipera-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .grotta-della-vipera-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .grotta-della-vipera-text11 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .grotta-della-vipera-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .grotta-della-vipera-container16 {
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
            .grotta-della-vipera-image {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .grotta-della-vipera-section-header {
              height: 100%;
              padding-top: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .grotta-della-vipera-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .grotta-della-vipera-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .grotta-della-vipera-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .grotta-della-vipera-text {
              font-size: 2rem;
              text-align: center;
            }
            .grotta-della-vipera-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .grotta-della-vipera-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .grotta-della-vipera-image {
              width: var(--dl-size-size-large);
            }
            .grotta-della-vipera-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .grotta-della-vipera-container04 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .grotta-della-vipera-container05 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .grotta-della-vipera-container06 {
              margin-top: 0px;
            }
            .grotta-della-vipera-container07 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .grotta-della-vipera-container08 {
              flex: 1;
              width: 100%;
            }
            .grotta-della-vipera-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .grotta-della-vipera-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .grotta-della-vipera-text04 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
            }
            .grotta-della-vipera-text05 {
              text-align: center;
            }
            .grotta-della-vipera-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .grotta-della-vipera-text07 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .grotta-della-vipera-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .grotta-della-vipera-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .grotta-della-vipera-text08 {
              text-align: center;
            }
            .grotta-della-vipera-text09 {
              text-align: center;
            }
            .grotta-della-vipera-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .grotta-della-vipera-text11 {
              text-align: center;
            }
            .grotta-della-vipera-text12 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default GrottaDellaVipera

export async function getStaticProps(context) {
  try {
    const contextU4as6iProp = await getEntityByAttribute9({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
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
