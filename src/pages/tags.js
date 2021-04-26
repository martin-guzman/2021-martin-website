// Import React and Gatsby Elements
import React from 'react'
import { graphql, Link } from 'gatsby'

// Import Utilities and Style Elements
import setupTags from '../components/utilities/setupTags'
import slugify from 'slugify'

// Import Components
import Layout from '../components/layout'
import SEO from '../components/seo'

const Tags = ({ data }) => {
  const postTags = setupTags(data.allContentfulPost.nodes)
  return (
    <Layout>
      <SEO title="Article Tags" />
      <div>
          {postTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index}>
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )
          })}

      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags