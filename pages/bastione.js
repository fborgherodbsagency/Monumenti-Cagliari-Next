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

const Bastione = (props) => {
  return (
    <>
      <div className="bastione-container">
        <Head>
          <title>Bastione - Monumenti Cagliari</title>
          <meta property="og:title" content="Bastione - Monumenti Cagliari" />
        </Head>
        <Navbar></Navbar>
        <div className="bastione-container01">
          <DataProvider
            renderSuccess={(context_u4as6i) => (
              <>
                <div className="bastione-container02">
                  <div className="bastione-section-header">
                    <div className="bastione-container-centered">
                      <div className="bastione-block-region">
                        <div className="bastione-region-left">
                          <h1 className="bastione-text">
                            {context_u4as6i?.name}
                          </h1>
                          <p className="bastione-text01 peragraph-detail">
                            {context_u4as6i?.posiiton}
                          </p>
                        </div>
                        <div className="bastione-region-right">
                          <img
                            alt="image"
                            src={context_u4as6i?.pattern?.url}
                            className="bastione-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bastione-section-storia">
                    <div className="bastione-container03 container-centered">
                      <div className="bastione-container04 block-region">
                        <div className="bastione-container05">
                          <img
                            alt="image"
                            src={context_u4as6i?.primaryImage?.url}
                            className="bastione-image1"
                          />
                          <div className="bastione-container06">
                            <div className="bastione-container07">
                              <h2 className="heading2-details">
                                Note Storiche
                              </h2>
                              <p>{context_u4as6i?.noteStoriche}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bastione-container08">
                          <img
                            alt="image"
                            src={context_u4as6i?.noteStoricheImage?.url}
                            className="bastione-image2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bastione-section-perch">
                    <div className="container-centered">
                      <div className="block-region">
                        <div className="bastione-region-left1">
                          <h2 className="bastione-text04 heading2-details">
                            <span className="bastione-text05">
                              Perchè visitarlo?
                            </span>
                            <br></br>
                          </h2>
                        </div>
                        <div className="bastione-region-right1">
                          <p className="bastione-text07">
                            {context_u4as6i?.percheVisitarlo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bastione-section-perch1">
                    <div className="container-centered">
                      <div className="bastione-block-region2 block-region">
                        <div className="bastione-region-left2">
                          <div className="bastione-container09">
                            <div className="bastione-container10">
                              <h3 className="bastione-text08 heading2-details">
                                <span className="bastione-text09">
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
                        <div className="bastione-region-right2">
                          <div className="bastione-container12">
                            <div className="bastione-container13">
                              <h3 className="bastione-text11 heading2-details">
                                <span className="bastione-text12">
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
                <div className="bastione-container15">
                  <div className="bastione-container16">
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
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .bastione-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .bastione-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .bastione-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-section-header {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: #d7c16d;
          }
          .bastione-container-centered {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-block-region {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .bastione-region-left {
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
          .bastione-text {
            font-size: 5rem;
            font-style: normal;
            font-family: 'Inria Serif';
            font-weight: 400;
          }
          .bastione-text01 {
            margin-top: var(--dl-space-space-fiveunits);
          }
          .bastione-region-right {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .bastione-image {
            width: 100%;
            max-width: 400px;
            object-fit: cover;
          }
          .bastione-section-storia {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .bastione-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .bastione-container05 {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .bastione-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 0px;
          }
          .bastione-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-container08 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .bastione-image2 {
            width: 100%;
            height: 100%;
            position: relative;
            object-fit: cover;
          }
          .bastione-section-perch {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
            background-color: #fbf6f1;
          }
          .bastione-region-left1 {
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
          .bastione-text04 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .bastione-region-right1 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .bastione-text07 {
            margin-top: 0px;
          }
          .bastione-section-perch1 {
            flex: 0 0 auto;
            width: 100%;
            height: 35vh;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            justify-content: center;
          }
          .bastione-block-region2 {
            justify-content: flex-start;
          }
          .bastione-region-left2 {
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
          .bastione-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bastione-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-text08 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .bastione-region-right2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bastione-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bastione-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bastione-text11 {
            font-size: 2.3rem;
            font-family: 'Inria Sans';
            padding-top: 0px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 0px;
          }
          .bastione-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .bastione-container16 {
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
            .bastione-image {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .bastione-section-header {
              height: 100%;
              padding-top: 0px;
              flex-direction: row;
              padding-bottom: 0px;
            }
            .bastione-container-centered {
              width: 100%;
              flex-direction: row;
            }
            .bastione-block-region {
              width: 100%;
              padding-top: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .bastione-region-left {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .bastione-text {
              font-size: 2rem;
              text-align: center;
            }
            .bastione-text01 {
              font-size: 0.9rem;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .bastione-region-right {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .bastione-image {
              width: var(--dl-size-size-large);
            }
            .bastione-section-storia {
              flex: 1;
              flex-direction: column;
            }
            .bastione-container04 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .bastione-container05 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .bastione-container06 {
              margin-top: 0px;
            }
            .bastione-container07 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .bastione-container08 {
              flex: 1;
              width: 100%;
            }
            .bastione-section-perch {
              height: 100%;
              flex-direction: row;
            }
            .bastione-region-left1 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .bastione-text04 {
              text-align: center;
              padding-top: var(--dl-space-space-unit);
            }
            .bastione-text05 {
              text-align: center;
            }
            .bastione-region-right1 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              align-items: center;
              justify-content: flex-start;
            }
            .bastione-text07 {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .bastione-section-perch1 {
              height: 100%;
              flex-direction: row;
            }
            .bastione-region-left2 {
              width: 100%;
              padding: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .bastione-text08 {
              text-align: center;
            }
            .bastione-text09 {
              text-align: center;
            }
            .bastione-region-right2 {
              width: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .bastione-text11 {
              text-align: center;
            }
            .bastione-text12 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Bastione

export async function getStaticProps(context) {
  try {
    const contextU4as6iProp = await getEntityByAttribute10({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationAddress percheVisitarlo briefDescription noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
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
