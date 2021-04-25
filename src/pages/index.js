// Import React and Gatsby ELements
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// Import Components
import Layout from '../components/layout';
import AllPosts from '../components/allPosts';

const Home = () => {

 	return (
   	<Layout>
	   	<h1>Home</h1>
	   	<AllPosts />
   	</Layout>
 	)
}

export default Home;