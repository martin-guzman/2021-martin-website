// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import useSiteMetadata from './hooks/useSiteMetadata'

function SEO({ description, lang, meta, keywords, title }) {
  const {
    title: siteMetaTitle,
    description: siteMetaDescription,
    author,
  } = useSiteMetadata()

  const metaDescription = description || siteMetaDescription

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO