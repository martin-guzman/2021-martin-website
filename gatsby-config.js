require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Martin Guzman`,
    author: {
      name: `Martin Guzman`,
      summary: `who lives and works in Vancouver, BC helping networks stay secure.`,
    },
    description: `A blog about Ethical Hacking, Cybersecurity and OSINT.`,
    siteUrl: `https://www.martin-guzman.com/`,
    social: {
      linkedin: `martin-guzman-ca`,
    },
    internalLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Articles',
        slug: '/articles',
      },
      {  
        name: 'About',
        slug: '/about',
      },
      {  
        name: 'Contact',
        slug: '/contact',
      },
    ],
    externalLinks: [
      {
        name: 'LinkedIn',
        url: `https://www.linkedin.com/in/martin-guzman-ca`,
      },
    ],
  },
  plugins: [
  	`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
		{
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
