// Import React and Gatsby ELements
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// Import Components
import TagList from './tagList'
import PostList from './postList'

const query = graphql`
  {
    allContentfulPost(sort: {fields: [publishDate], order: DESC }) {
      nodes {
        id
        title
        publishDate(formatString: "MMMM Do, YYYY")
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 500, placeholder: BLURRED)
          title
        }
      }
    }
  }
`

const AllPosts = () => {
	//const data = useStaticQuery(query)
  // const posts = data.allContentfulPost.nodes
  const { 
    allContentfulPost: { nodes: posts } 
  } = useStaticQuery(query)

  return (
    <div>
    	<h1>All Posts</h1>
    	<h2>Tag List:</h2>
    	<TagList posts={posts} />
    	<h2>Post List:</h2>
    	<PostList posts={posts} />
    </div>
  )
}

export default AllPosts