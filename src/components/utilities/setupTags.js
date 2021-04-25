// Utility for Contentful Post Content: Tags Array
const setupTags = posts => {
 	const allTags = {}
 	console.log('hello from new setup')
 
 
 	posts.forEach(post => {
 		post.content.tags.forEach(tag => {

			// Display tag count
 		 	if (allTags[tag]) {
 		   	allTags[tag] = allTags[tag] + 1
 		 	} else {
 		   	allTags[tag] = 1
 		 }
 		})
 	})
 
 	// Capture the property and value and sort the tag arrays
 	// Compare the tag/strings based on its text
 	const newTags = Object.entries(allTags).sort((a, b) => {
 	// Retrive first item from the tag array
 	const [firstTag] = a
 	const [secondTag] = b
 		// Use localeCompare method to compare tag's string/text
 		// Compare the firstTag to secondTag to sort alphabetical order
 		return firstTag.localeCompare(secondTag)
 	})
 
 	return newTags
 }

export default setupTags