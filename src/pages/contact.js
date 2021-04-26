// Import React and Gatsby
import React from 'react'

// Import Utilities and Style Elements

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = ({ data, location }) => {
  return (
    <Layout location={location}>
			<SEO title="Contact" />
			<h1>Contact</h1>
    </Layout>
  )
}

export default Contact