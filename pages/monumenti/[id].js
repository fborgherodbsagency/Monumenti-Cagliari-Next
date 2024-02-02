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

const Monumenti = (props) => {
  return (
    <>
      <div className="monumenti-container">
        <Head>
          <title>Monumenti - Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti - Monumenti Cagliari" />
        </Head>
        <DataProvider
          renderSuccess={(MonumentiEntity) => (
            <>
              <div className="monumenti-container1">
                <h1>{MonumentiEntity?.name}</h1>
                <span>{MonumentiEntity?.descriptiveSummary}</span>
                <span>{MonumentiEntity?.posiiton}</span>
                <div className="monumenti-container2">
                  <RichTextRenderer
                    node={MonumentiEntity?.visitingHours}
                    overwrites={{
                      documentLink: CaisyDocumentLink,
                    }}
                  ></RichTextRenderer>
                </div>
                <div className="monumenti-container3">
                  <RichTextRenderer
                    node={MonumentiEntity?.orarioInvernale}
                    overwrites={{
                      documentLink: CaisyDocumentLink,
                    }}
                  ></RichTextRenderer>
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
          .monumenti-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .monumenti-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .monumenti-container2 {
            width: 100%;
            align-self: stretch;
          }
          .monumenti-container3 {
            width: 100%;
            align-self: stretch;
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
