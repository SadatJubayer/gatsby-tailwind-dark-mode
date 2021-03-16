import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex justify-center items-center min-h-screen bg-teal-400 dark:bg-teal-800">
      <h1 className="text-2xl text-gray-800 dark:text-red-100">
        Tailwind + Dark Mode
        <a href="https://www.smjubayer.me" target="_blank">
          by - Sadat Jubayer
        </a>
      </h1>
    </div>
  </Layout>
)

export default IndexPage
