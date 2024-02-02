import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import {
  getEntityByAttribute,
  getEntityByAttribute as getEntityByAttribute1,
  getEntityByAttribute as getEntityByAttribute2,
  getEntityByAttribute as getEntityByAttribute3,
  getEntityByAttribute as getEntityByAttribute4,
} from '@teleporthq/cms-mappers/caisy'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Home - Monumenti Cagliari</title>
          <meta property="og:title" content="Home - Monumenti Cagliari" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="home-section-monumenti">
          <div className="home-block">
            <DataProvider
              renderSuccess={(Anfiteatro_Romano) => (
                <>
                  <animate-on-reveal animation="fadeIn">
                    <div
                      data-thq-animate-on-reveal="true"
                      className="row-location"
                    >
                      <Link href="/anfiteatro-romano">
                        <a>
                          <div className="home-container02 location-title-box">
                            <h2 className="heading2-home">
                              {Anfiteatro_Romano?.name}
                            </h2>
                            <span>Scopri di più</span>
                          </div>
                        </a>
                      </Link>
                      <div className="home-container03">
                        <img
                          alt="image"
                          src={Anfiteatro_Romano?.primaryImage?.url}
                          className="home-image"
                        />
                      </div>
                    </div>
                  </animate-on-reveal>
                </>
              )}
              initialData={props.anfiteatroRomanoProp}
              persistDataDuringLoading={true}
              key={props?.anfiteatroRomanoProp?.id}
            />
            <DataProvider
              renderSuccess={(Torre_dellelefante) => (
                <>
                  <div className="home-container04 row-location">
                    <Link href="/torre-dell-elefante">
                      <a>
                        <div className="home-container05">
                          <img
                            alt="image"
                            src={Torre_dellelefante?.primaryImage?.url}
                            className="home-image1"
                          />
                        </div>
                      </a>
                    </Link>
                    <Link href="/torre-dell-elefante">
                      <a>
                        <div className="home-container06 location-title-box">
                          <h2 className="home-text02 heading2-home">
                            {Torre_dellelefante?.name}
                          </h2>
                          <span>Scopri di più</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </>
              )}
              initialData={props.torreDellelefanteProp}
              persistDataDuringLoading={true}
              key={props?.torreDellelefanteProp?.id}
            />
            <DataProvider
              renderSuccess={(Cripta) => (
                <>
                  <div className="home-container07 row-location">
                    <Link href="/cripta-di-santa-restituta">
                      <a>
                        <div className="home-container08 location-title-box">
                          <h2 className="heading2-home">{Cripta?.name}</h2>
                          <span>Scopri di più</span>
                        </div>
                      </a>
                    </Link>
                    <div className="home-container09">
                      <img
                        alt="image"
                        src={Cripta?.primaryImage?.url}
                        className="home-image2"
                      />
                    </div>
                  </div>
                </>
              )}
              initialData={props.criptaProp}
              persistDataDuringLoading={true}
              key={props?.criptaProp?.id}
            />
            <DataProvider
              renderSuccess={(Bastione) => (
                <>
                  <div className="home-container10 row-location">
                    <Link href="/bastione">
                      <a>
                        <div className="home-container11">
                          <img
                            alt="image"
                            src={Bastione?.primaryImage?.url}
                            className="home-image3"
                          />
                        </div>
                      </a>
                    </Link>
                    <Link href="/bastione">
                      <a>
                        <div className="home-container12 location-title-box">
                          <h2 className="home-text06 heading2-home">
                            {Bastione?.name}
                          </h2>
                          <span>Scopri di più</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </>
              )}
              initialData={props.bastioneProp}
              persistDataDuringLoading={true}
              key={props?.bastioneProp?.id}
            />
            <DataProvider
              renderSuccess={(Grotta) => (
                <>
                  <div className="home-container13 row-location">
                    <Link href="/grotta-della-vipera">
                      <a>
                        <div className="home-container14 location-title-box">
                          <h2 className="heading2-home">{Grotta?.name}</h2>
                          <span>Scopri di più</span>
                        </div>
                      </a>
                    </Link>
                    <div className="home-container15">
                      <img
                        alt="image"
                        src={Grotta?.primaryImage?.url}
                        className="home-image4"
                      />
                    </div>
                  </div>
                </>
              )}
              initialData={props.grottaProp}
              persistDataDuringLoading={true}
              key={props?.grottaProp?.id}
            />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            min-height: 100vh;
          }
          .home-section-monumenti {
            width: 100%;
          }
          .home-block {
            flex: 0 0 auto;
          }
          .home-container02 {
            background: #b4ccac;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .home-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container06 {
            background-color: #78b9e5;
          }
          .home-text02 {
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
          }
          .home-container08 {
            background-color: #b3aaba;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container12 {
            background-color: #d7c16d;
          }
          .home-text06 {
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
          }
          .home-container14 {
            background-color: #2fa3a3;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 479px) {
            .home-container03 {
              width: 50%;
            }
            .home-container04 {
              height: 20vh;
              padding-right: 0px;
            }
            .home-container05 {
              width: 50%;
            }
            .home-container07 {
              height: 20vh;
              padding-left: 0px;
            }
            .home-container08 {
              width: 50%;
            }
            .home-container09 {
              width: 50%;
            }
            .home-container10 {
              height: 20vh;
              padding-right: 0px;
            }
            .home-container11 {
              width: 50%;
            }
            .home-container12 {
              width: 50%;
            }
            .home-container13 {
              height: 20vh;
              padding-left: 0px;
            }
            .home-container14 {
              width: 50%;
            }
            .home-container15 {
              width: 50%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  try {
    const anfiteatroRomanoProp = await getEntityByAttribute({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
      attribute: 'id',
      id: 'bb9d02ed-8c02-4957-96ce-79f01213c4d6',
    })
    const torreDellelefanteProp = await getEntityByAttribute1({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
      attribute: 'id',
      id: '3d819e94-0407-4488-8c09-e734ad0f0007',
    })
    const criptaProp = await getEntityByAttribute2({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
      attribute: 'id',
      id: '414395c3-82af-4390-a5b9-724a5f992773',
    })
    const bastioneProp = await getEntityByAttribute3({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
      attribute: 'id',
      id: '467b5ae0-337a-47df-a92b-6ee3ca7decfc',
    })
    const grottaProp = await getEntityByAttribute4({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}',
      attribute: 'id',
      id: '7b9f7924-0bb9-46dc-81db-6babd9c3c5c2',
    })
    return {
      props: {
        anfiteatroRomanoProp: anfiteatroRomanoProp?.data?.[0],
        torreDellelefanteProp: torreDellelefanteProp?.data?.[0],
        criptaProp: criptaProp?.data?.[0],
        bastioneProp: bastioneProp?.data?.[0],
        grottaProp: grottaProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
