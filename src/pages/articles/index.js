// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements

// Import Components
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import AllPosts from '../../components/allPosts'

const Articles = ({ location }) => {

  return (
    <Layout location={location}>
    <SEO title="Articles" />
      <h1>All Articles Test</h1>
      <AllPosts />
    </Layout>
  )
}



export default Articles