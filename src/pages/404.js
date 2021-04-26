// Import React and Gatsby
import React from 'react'

// Import Utilities and Style Elements

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'


const Error = ({ data, location }) => {
  return (
    <Layout location={location}>
			<SEO title="404 Error" />
			<h1>About</h1>
    </Layout>
  )
}

export default Error