import React from 'react'
import Head from 'next/head'

const PlaceHolderPage = (props) => {
  return (
    <>
      <div className="place-holder-page-container">
        <Head>
          <title>Monumenti Cagliari</title>
          <meta property="og:title" content="Monumenti Cagliari" />
        </Head>
        <div className="place-holder-page-container1">
          <div className="place-holder-page-container2">
            <img
              alt="image"
              src="/a-s-black-400w.png"
              className="place-holder-page-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .place-holder-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .place-holder-page-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            align-items: center;
            justify-content: center;
          }
          .place-holder-page-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .place-holder-page-image {
            width: 100%;
            max-width: 400px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default PlaceHolderPage
