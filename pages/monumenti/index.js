import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { getEntitiesWithPagination } from '@teleporthq/cms-mappers/caisy'

const Monumenti = (props) => {
  return (
    <>
      <div className="monumenti-container">
        <Head>
          <title>Monumenti - Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti - Monumenti Cagliari" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(MonumentiEntities) => (
                  <>
                    <div className="monumenti-container1">
                      <h1>{MonumentiEntities?.name}</h1>
                      <span>{MonumentiEntities?.name}</span>
                      <span>{MonumentiEntities?.descriptiveSummary}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.monumentiEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
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
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Monumenti.defaultProps = {
  monumentiEntities: [],
}

Monumenti.propTypes = {
  monumentiEntities: PropTypes.array,
}

export default Monumenti

export async function getStaticProps(context) {
  try {
    const response = await getEntitiesWithPagination({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query MyQuery($first: Int, $after: String){allMonumenti(first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}name pattern{__typename _meta{createdAt updatedAt id}description height id src title width}posiiton headerColor noteStoriche primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}visitingHours{json connections{__typename  }}orarioInvernale{json connections{__typename  }}percheVisitarlo noteStoricheImage{__typename _meta{createdAt updatedAt id}description height id src title width}descriptiveSummary}}}}',
      page: 1,
      perPage: 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        monumentiEntities: response,
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
