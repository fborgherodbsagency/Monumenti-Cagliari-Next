import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntities,
  getEntitiesWithPagination,
} from '@teleporthq/cms-mappers/caisy'

const Monumenti11 = (props) => {
  return (
    <>
      <div className="monumenti11-container">
        <Head>
          <title>Monumenti1 - Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti1 - Monumenti Cagliari" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(MonumentiEntities) => (
                  <>
                    <div className="monumenti11-container1">
                      <span>{MonumentiEntities?.locationName}</span>
                      <span>{MonumentiEntities?.briefDescription}</span>
                      <span>{MonumentiEntities?.locationAddress}</span>
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
          .monumenti11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .monumenti11-container1 {
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

Monumenti11.defaultProps = {
  monumentiEntities: [],
}

Monumenti11.propTypes = {
  monumentiEntities: PropTypes.array,
}

export default Monumenti11

export async function getStaticPaths() {
  try {
    const response = await getEntities({
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query: '{allMonumenti{edges{node{id}}}}',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
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
    const response = await getEntitiesWithPagination({
      ...context?.params,
      projectId: 'e37dde76-3990-46c8-ae2d-e8de13e0247e',
      query:
        'query MyQuery($first: Int, $after: String){allMonumenti(first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}headerColor squareImage{__typename _meta{createdAt updatedAt id}description height id src title width}locationIcon{__typename _meta{createdAt updatedAt id}description height id src title width}locationName primaryImage{__typename _meta{createdAt updatedAt id}description height id src title width}verticalImage{__typename _meta{createdAt updatedAt id}description height id src title width}fullDescription{json connections{__typename ...on Asset{description height id src title width} }}locationAddress percheVisitarlo briefDescription locationFeatures{json connections{__typename  }}visitingHoursSummer{json connections{__typename  }}visitingHoursWinter{json connections{__typename  }}}}}}',
      page: context.params.page,
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
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
