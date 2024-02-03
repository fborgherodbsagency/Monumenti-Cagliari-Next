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
          <title>Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti Cagliari" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="home-section-monumenti">
          <div className="home-block">
            <DataProvider
              renderSuccess={(Anfiteatro_Romano) => (
                <>
                  <div className="row-location">
                    <div className="home-container02 location-title-box">
                      <div className="home-container03">
                        <img
                          alt="image"
                          src={Anfiteatro_Romano?.locationIcon?.url}
                          className="location-icon-home"
                        />
                        <Link href={`/monumenti/${Anfiteatro_Romano?.id}`}>
                          <a className="home-link">
                            <h2 className="home-text heading2-home">
                              {Anfiteatro_Romano?.locationName}
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <Link href={`/monumenti/${Anfiteatro_Romano?.id}`}>
                        <a className="home-location-listing-link">
                          Vai al dettaglio &gt;
                        </a>
                      </Link>
                    </div>
                    <div className="home-container04">
                      <Link href={`/monumenti/${Anfiteatro_Romano?.id}`}>
                        <a className="home-link02">
                          <img
                            alt="image"
                            src={Anfiteatro_Romano?.primaryImage?.url}
                            className="home-image01 home-location-listing-image"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              )}
              initialData={props.anfiteatroRomanoProp}
              persistDataDuringLoading={true}
              key={props?.anfiteatroRomanoProp?.id}
            />
            <DataProvider
              renderSuccess={(Torre_dellelefante) => (
                <>
                  <div className="home-container05 row-location">
                    <div className="home-container06">
                      <Link href={`/monumenti/${Torre_dellelefante?.id}`}>
                        <a className="home-link03">
                          <img
                            alt="image"
                            src={Torre_dellelefante?.primaryImage?.url}
                            className="home-image02 home-location-listing-image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="home-container07 location-title-box">
                      <div className="home-container08">
                        <img
                          alt="image"
                          src={Torre_dellelefante?.locationIcon?.url}
                          className="location-icon-home"
                        />
                        <Link href={`/monumenti/${Torre_dellelefante?.id}`}>
                          <a className="home-link04">
                            <h2 className="home-text1 heading2-home">
                              {Torre_dellelefante?.locationName}
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <Link href={`/monumenti/${Torre_dellelefante?.id}`}>
                        <a className="home-location-listing-link">
                          Vai al dettaglio &gt;
                        </a>
                      </Link>
                    </div>
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
                  <div className="row-location home-container09">
                    <div className="home-container10 location-title-box">
                      <div className="home-container11">
                        <img
                          alt="image"
                          src={Cripta?.locationIcon?.url}
                          className="location-icon-home"
                        />
                        <Link href={`/monumenti/${Cripta?.id}`}>
                          <a className="home-link06">
                            <h2 className="home-text2 heading2-home">
                              {Cripta?.locationName}
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <Link href={`/monumenti/${Cripta?.id}`}>
                        <a className="home-location-listing-link">
                          Vai al dettaglio &gt;
                        </a>
                      </Link>
                    </div>
                    <div className="home-container12">
                      <Link href={`/monumenti/${Cripta?.id}`}>
                        <a className="home-link08">
                          <img
                            alt="image"
                            src={Cripta?.primaryImage?.url}
                            className="home-image05 home-location-listing-image"
                          />
                        </a>
                      </Link>
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
                  <div className="row-location home-container13">
                    <div className="home-container14">
                      <Link href={`/monumenti/${Bastione?.id}`}>
                        <a className="home-link09">
                          <img
                            alt="image"
                            src={Bastione?.primaryImage?.url}
                            className="home-image06 home-location-listing-image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="home-container15 location-title-box">
                      <div className="home-container16">
                        <img
                          alt="image"
                          src={Bastione?.locationIcon?.url}
                          className="location-icon-home"
                        />
                        <Link href={`/monumenti/${Bastione?.id}`}>
                          <a className="home-link10">
                            <h2 className="home-text3 heading2-home">
                              {Bastione?.locationName}
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <Link href={`/monumenti/${Bastione?.id}`}>
                        <a className="home-location-listing-link">
                          Vai al dettaglio &gt;
                        </a>
                      </Link>
                    </div>
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
                  <div className="row-location home-container17">
                    <div className="home-container18 location-title-box">
                      <div className="home-container19">
                        <img
                          alt="image"
                          src={Grotta?.locationIcon?.url}
                          className="location-icon-home"
                        />
                        <Link href={`/monumenti/${Grotta?.id}`}>
                          <a className="home-link12">
                            <h2 className="home-text4 heading2-home">
                              {Grotta?.locationName}
                            </h2>
                          </a>
                        </Link>
                      </div>
                      <Link href={`/monumenti/${Grotta?.id}`}>
                        <a className="home-location-listing-link">
                          Vai al dettaglio &gt;
                        </a>
                      </Link>
                    </div>
                    <div className="home-container20">
                      <Link href={`/monumenti/${Grotta?.id}`}>
                        <a className="home-link14">
                          <img
                            alt="image"
                            src={Grotta?.primaryImage?.url}
                            className="home-image09 home-location-listing-image"
                          />
                        </a>
                      </Link>
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
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-text {
            text-decoration: none;
          }
          .home-container04 {
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
          .home-link02 {
            display: contents;
          }
          .home-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container06 {
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
          .home-link03 {
            display: contents;
          }
          .home-image02 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container07 {
            background-color: #78b9e5;
          }
          .home-container08 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link04 {
            display: contents;
          }
          .home-text1 {
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
            text-decoration: none;
          }
          .home-container10 {
            background-color: #b3aaba;
          }
          .home-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link06 {
            display: contents;
          }
          .home-text2 {
            text-decoration: none;
          }
          .home-container12 {
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
          .home-link08 {
            display: contents;
          }
          .home-image05 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container14 {
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
          .home-link09 {
            display: contents;
          }
          .home-image06 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-container15 {
            background-color: #d7c16d;
          }
          .home-container16 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link10 {
            display: contents;
          }
          .home-text3 {
            font-style: normal;
            font-family: 'Inria Sans';
            font-weight: 700;
            text-decoration: none;
          }
          .home-container18 {
            background-color: #2fa3a3;
          }
          .home-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link12 {
            display: contents;
          }
          .home-text4 {
            text-decoration: none;
          }
          .home-container20 {
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
          .home-link14 {
            display: contents;
          }
          .home-image09 {
            text-decoration: none;
          }

          @media (max-width: 479px) {
            .home-container04 {
              width: 50%;
            }
            .home-container05 {
              padding-right: 0px;
            }
            .home-container06 {
              width: 50%;
            }
            .home-container09 {
              padding-left: 0px;
            }
            .home-container10 {
              width: 50%;
            }
            .home-container12 {
              width: 50%;
            }
            .home-container13 {
              padding-right: 0px;
            }
            .home-container14 {
              width: 50%;
            }
            .home-container15 {
              width: 50%;
            }
            .home-container17 {
              padding-left: 0px;
            }
            .home-container18 {
              width: 50%;
            }
            .home-container20 {
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
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
      id: 'bb9d02ed-8c02-4957-96ce-79f01213c4d6',
    })
    const torreDellelefanteProp = await getEntityByAttribute1({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
      id: '3d819e94-0407-4488-8c09-e734ad0f0007',
    })
    const criptaProp = await getEntityByAttribute2({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
      id: '414395c3-82af-4390-a5b9-724a5f992773',
    })
    const bastioneProp = await getEntityByAttribute3({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
      attribute: 'id',
      id: '467b5ae0-337a-47df-a92b-6ee3ca7decfc',
    })
    const grottaProp = await getEntityByAttribute4({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query Monumenti($value:ID!){Monumenti(id:$value){_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}',
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
