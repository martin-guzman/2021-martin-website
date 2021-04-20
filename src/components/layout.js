/*  Layout Component
*/
// Import React and Gatsby Elements
import React from 'react';

// Import Components
import Header from './header/header';
import Footer from './footer/footer';

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout