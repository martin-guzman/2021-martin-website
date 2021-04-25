// Import React and Gatsby Elements
import React from 'react'
import { Link } from 'gatsby'

// Import Utilities and Style Elements
import setupTags from './utilities/setupTags'
import slugify from 'slugify'

const TagList = ({ posts }) => {
	const postTags = setupTags(posts)

  return (
    <div>
    	<h4>Tag List</h4>
    	{postTags.map((tag, index) => {
    		// Destructure tag array
    		const [ text, value ] = tag
            const slug = slugify(text, { lower: true })
    		return <Link to={`/tags/${slug}`} key={index}>{text} ({value})</Link>
    	})}
    </div>
  )
}

export default TagList