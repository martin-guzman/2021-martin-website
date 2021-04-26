// Import React and Gatsby Elements
import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import Utilities and Style Elements
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Options } from '@contentful/rich-text-react-renderer'
import slugify from 'slugify'

// Import Components
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const PostTemplate = ({ data, location }) => {

	const { title, content, image } = data.contentfulPost
	const pathToImageHero = getImage(image)
	const { tags } = content
	const post = data.contentfulPost.body

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const image = getImage(node.data.target)
        return <GatsbyImage image={image} alt={node.data.target.description} />
      },
    },
  }

  const output = renderRichText(post, options)

 	return (
   	<Layout location={location}>
      <SEO title={title} />
	   	<h1>{title}</h1>
			<GatsbyImage
	      image={pathToImageHero}
	      alt={data.contentfulPost.image.title}
      />
      <React.Fragment>
        {tags.map((tag, index) => {
          const slug = slugify(tag, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>{tag}</Link>
                  )
          })}
      </React.Fragment>
   		<React.Fragment>
   			{output}
   		</React.Fragment>
   	</Layout>
 	)
}

export const query = graphql`
  query getSinglePost($title: String) {
    contentfulPost(title: { eq: $title }) {
      title
      content {
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
        title
        description
      }
  		body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            gatsbyImageData(layout: CONSTRAINED, width: 500, placeholder: BLURRED)
            contentful_id
            title
            description
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
