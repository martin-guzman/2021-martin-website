// Hook for siteMetaData Elements
import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
            internalLinks {
              name
              slug
            }
            externalLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata