// Import React and Gatsby Elements
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import Utilities and Style Elements
import slugify from 'slugify'

const PostList = ({ posts = [] }) => {
  return (

    <div>
    	{posts.map((post) => {

    		const { id, title, image } = post
    		const pathToImage = getImage(image)
    		const slug = slugify(title, { lower: true })

    	  return (
    	  	<Link key={id} to={`/${slug}`} >
    	  		<h4>{title}</h4>
    	  		<GatsbyImage 
    	  			image={pathToImage} 
    	  			alt={title} 
    	  		/>
    	  	</Link>	
    	  )
    	})}	
    </div>
  )
}

export default PostList