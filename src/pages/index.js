// Import React and Gatsby ELements
import React from 'react'

// Import Utilities and Style Elements

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import AllPosts from '../components/allPosts'

const Home = ({ data, location }) => {

 	return (
   	<Layout location={location}>
   		<SEO title="Home" />
	   	<h1>Home</h1>
	   	<AllPosts />
   	</Layout>
 	)
}

export default Home