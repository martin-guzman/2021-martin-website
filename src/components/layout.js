/*  Layout Component
*/
// Import React and Gatsby Elements
import React from 'react'

// Import Utilities and Style Elements
import PropTypes from 'prop-types'
import useSiteMetadata from './hooks/useSiteMetadata'

// Import Components
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ location, title, children }) => {

  return (
    <React.Fragment>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout