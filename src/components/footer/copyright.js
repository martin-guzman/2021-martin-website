/* 	Footer Copyright Information Component
*/
// Import React and Gatsby Elements
import React from 'react'
import { Link } from 'gatsby'

// Import Utilities and Style Elements

const Copyright = () => {
  return <React.Fragment>© {new Date().getFullYear()}, <Link to="/">Martin Guzman</Link></React.Fragment>
}
export default Copyright