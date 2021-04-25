import React from 'react'

//Import Components
import Layout from '../components/layout'
import AllPosts from '../components/allPosts'

const Posts = (props) => {
 	return (
   	<Layout>
	   	<h1>Posts</h1>
	   	<AllPosts />
   	</Layout>
 	)
}

export default Posts