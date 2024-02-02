import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const PrivacyPolicy = (props) => {
  return (
    <>
      <div className="privacy-policy-container">
        <Head>
          <title>PrivacyPolicy - Monumenti Cagliari</title>
          <meta
            property="og:title"
            content="PrivacyPolicy - Monumenti Cagliari"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <div className="privacy-policy-container1">
          <div className="privacy-policy-container2">
            <h1 className="privacy-policy-text">Privacy &amp; Policy</h1>
          </div>
        </div>
        <div className="privacy-policy-container3">
          <div className="privacy-policy-container4 container-centered">
            <h2>Heading</h2>
            <span>Text</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .privacy-policy-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            background-color: #000000;
          }
          .privacy-policy-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .privacy-policy-text {
            color: rgb(255, 255, 255);
          }
          .privacy-policy-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .privacy-policy-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default PrivacyPolicy
