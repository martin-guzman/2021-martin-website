// Import React and Gatsby Elements
import React from 'react'
import { graphql } from 'gatsby'

// Import Utilities and Style Elements


// Import Components
import Layout from '../components/layout'




import PostList from "../components/postList"


const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.nodes
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div>
          <PostList posts={posts} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetPostByTag($tag: String) {
    allContentfulPost(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
      }
    }
  }
`

export default TagTemplate