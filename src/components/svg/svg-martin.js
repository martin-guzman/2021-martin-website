// Import React and Gatsby Elements
import React from 'react'
import { Link } from 'gatsby'

// Import Utilities and Style Elements
import { motion } from 'framer-motion'

const SVGMartin = () => {

	// Create and define variant props for target object #chat-bubble
	const variantChatBubble = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 }
	}

	return (
		<Link to="/">
		<div>
			<motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 230" 
	      initial="hidden"
	      whileHover="visible"
	      whileTap="visible"
	      style={{zIndex: `50000000`}}
			>
			  <g id="martin-avatar">
			    <path fill="#A299FF" d="M39.3 195.7l41.8-17.3v-8.7c-4.1-2-7.5-5-10-8.8-1.7-3-3.8-11.5-4-12.4-1.7-6.9-4.1-20.6-4.8-24.5-5.1-4.6-8.1-12-8.8-22.5 0-7.8 2.3-12.5 5.9-12.5.8 0 1.6.3 2.3.8 0-5.7.1-18.8 2.6-24.1C74.4 37 102.8 32.2 115 32.5h1c12.2-.2 40.6 4.5 50.7 33.3 2.5 5.3 2.5 18.4 2.6 24.1.7-.5 1.5-.8 2.3-.8 3.5 0 5.9 4.7 5.9 12.5-.7 10.4-3.7 17.9-8.8 22.5-.7 3.9-3.1 17.6-4.8 24.5-.2.9-2.3 9.3-4 12.4-2.5 3.8-6 6.8-10 8.8v8.7l41.8 17.3c21.8-20.4 35.4-49.4 35.4-81.6 0-61.7-50-111.6-111.6-111.6S3.9 52.4 3.9 114.1c0 32.2 13.6 61.2 35.4 81.6z"/>
			    <path fill="#000000" d="M149.9 169.7c4.1-2 7.5-5 10-8.8 1.7-3 3.8-11.5 4-12.4 1.7-6.9 4.1-20.6 4.8-24.5 5.1-4.6 8.1-12 8.8-22.5 0-7.8-2.3-12.5-5.9-12.5-.8 0-1.6.3-2.3.8 0-5.7-.1-18.8-2.6-24.1C156.6 37 128.2 32.2 116 32.5h-1c-12.2-.2-40.6 4.5-50.7 33.3-2.5 5.3-2.5 18.4-2.6 24.1-.7-.5-1.5-.8-2.3-.8-3.5 0-5.9 4.7-5.9 12.5.7 10.4 3.7 17.9 8.8 22.5.7 3.9 3.1 17.6 4.8 24.5.2.9 2.3 9.3 4 12.4 2.5 3.8 6 6.8 10 8.8v8.7l-41.8 17.3c20 18.6 46.7 30.1 76.2 30.1s56.3-11.4 76.2-30.1l-41.8-17.3v-8.8z"/>
			    <path id="mouth" fill="#ffffff" d="M100.1 140.3c-1-1-1-2.8 0-3.8s2.8-1 3.8 0c3.1 3.1 6.9 4.6 11.5 4.6 4.7 0 8.5-1.5 11.5-4.6 1-1 2.8-1 3.8 0s1 2.8 0 3.8c-4.1 4.1-9.3 6.2-15.3 6.2s-11.2-2.1-15.3-6.2z"/>
			    <path id="neck" fill="#ffffff" d="M100 178.4c5 1.9 10.2 3 15 3.5h.7c7.3-.3 14.4-2.5 20.6-6.3 1.8-.9 3.4-1.8 5.4-2.7l1.5-.7 2.9-1.3v10.7c-21.4 12.1-41.5 12.1-61.5 0v-10.4l15.4 7.2z"/>
			    <path id="face" fill="#ffffff" d="M115.4 39.4c-.8 0-19.5.8-30.4 6.8-6.4 3.6-10 8.2-10 8.2-.8 1-1.7 2.3-2.7 4.2-4.8 8.9-6.4 20.6-6.5 21.6 0 0-1.4 11.4-1.8 34.4 0 2.8.3 5.6.7 8.3 4.5 3.5 10.2 5.1 15.9 4.6 2.7-.3 7.7-1.8 11.2-2.8 2.7-.8 3.3-1 4.7-1.4 3.2-.9 8-1.9 14.3-2 1.1 0 2.6-.1 4.5 0 1.9-.1 3.4 0 4.5 0 6.4.2 11.1 1.1 14.3 2 1.5.4 2 .6 4.7 1.4 3.5 1 8.4 2.5 11.2 2.8 5.7.5 11.4-1.1 15.9-4.6.4-2.8.7-5.5.7-8.3-.4-23-1.8-34.4-1.8-34.4-.1-1-1.7-12.7-6.5-21.6-1-1.9-2-3.2-2.7-4.2 0 0-3.6-4.6-10-8.2-10.6-6.1-29.3-6.8-30.2-6.8z" />
			    <motion.g id="eyes"
			    	initial={{ scaly: 1 }}
			     	animate={{ scaley: [ 1, .25, 1 ] }}
	      		transition={{ duration: .45, repeat: Infinity, repeatDelay: 5, ease: "linear",  }} 
			    	>
			      <circle id="eye-left" cx="86.4" cy="98.3" r="6.9"/>
			      <circle id="eye-right" cx="144.5" cy="98.3" r="6.9"/>
			    </motion.g>
			    <g id="ears">
			      <path fill="#ffffff" d="M172.5 92.6c.6 0 2.4 2.3 2.5 9-.1 6.3-2 12.4-5.4 17.6v-17.9c.1-6.2 2.1-8.7 2.9-8.7zM55.9 101.7c0-6.9 1.9-9.1 2.5-9.1.6 0 1.8 1.4 2.5 4.7v21.5c-3.2-5.2-4.9-11.1-5-17.1z"/>
			    </g>
			    <path id="cap-brim" d="M183.2 92.2l-3.9-2c-7.5-3.9-17.5-9.2-17.5-9.2-18.5-11.3-46.1-11.3-46.1-11.3h-.5s-27.6 0-46.1 11.3c0 0-10 5.2-17.5 9.2l-3.9 2s-1.3 1.7 0 3.4c0 0 1.3 2 4.4 1.7 3.1-.3 5.6-2.6 5.6-2.6l2.6-1.3.5-.7c30.2-9 54.3-7.4 54.3-7.4h.3s24.4-1.6 55 7.6l.5.5 1.6.9s3.5 2.8 6.6 3c3.1.3 4.4-1.7 4.4-1.7 1-1.7-.3-3.4-.3-3.4z"/>
			    <path id="cap-hat" d="M57.6 87.2s51.9-28.2 115.6-.1c0-36.3-10.7-51.6-10.7-51.6-17-19.2-45-15-45-15h-3.8s-27.6-3.4-44.6 15.8c0 0-11.4 11.7-11.4 48"/>
			    <path id="cap-button" d="M114 21.3c-2.6 0-3.8-.7-3.8-.7 0-1.8 2.3-3.3 5.2-3.3s5.2 1.5 5.2 3.3c0 0-1.3.7-3.2.7H114z"/>
			    <g id="cap-seams">
			      <path id="seam-left" fill="#ffffff" d="M65.3 83.5c-2.2-55.4 35.3-62.6 35.3-62.6S65.4 29.3 67 82.4l-1.7 1.1z" />
			      <path id="seam-right" fill="#ffffff" d="M164 82.3c1.6-53.1-33.6-61.5-33.6-61.5s37.4 7.2 35.3 62.6l-1.7-1.1z" />
			    </g>
			    <path id="cap-brim-highlight" fill="#ffffff" d="M170.7 85.8s-23.2-12.1-55.2-12c-15.7 0-36.1 4.2-55.3 12.6v-.6c19.2-9.2 39.6-14 55.3-14.1 32-.1 55.2 13.5 55.2 13.5v.6z"/>
			    <path id="dogers-logo" fill="#fff" fillRule="evenodd" d="M125.2 49.4h-2.9v3.9H121l-2.8-11.6h-3.8l-2.8 11.6h-1.3v-16h2.1v-2.5h-6.6v2.6h1.8v16h-1.8v2.9h4.7l-.7 3.9h-2V63h7v-2.8h-2.1l.8-4.2h5.2l1 4.2h-2V63h6.9v-2.8h-1.9l-1.2-4.2h3.6v-6.6zm-10.9 3.8l2.1-8.4 1.9 8.4h-4z" clipRule="evenodd"/>
			  </g>
			 <motion.g id="chat-bubble"
			 	variants={variantChatBubble}
			 	initial="hidden"
			 >
			    <path id="bubble" d="M195.3 33v49.3c0 6.9 5.1 12.6 11.7 13.6l-6.3 23.8 29-23.6h35.4c7.6 0 13.8-6.2 13.8-13.8V33c0-7.6-6.2-13.8-13.8-13.8h-56c-7.6 0-13.8 6.2-13.8 13.8z"/>
			    <path id="hi" fill="#ffffff" d="M244.6 80.9h-10.3v-19c0-2.2-.4-3.8-1.3-4.8s-2-1.5-3.5-1.5c-.6 0-1.3.1-2 .4s-1.4.7-2.1 1.2c-.7.5-1.3 1.2-1.8 1.9s-1 1.5-1.3 2.4v19.4H212v-47h10.3v18.9c1.2-2 2.9-3.6 4.9-4.7s4.3-1.6 6.7-1.6c2.3 0 4.1.4 5.5 1.2 1.4.8 2.5 1.8 3.2 3 .8 1.2 1.3 2.6 1.5 4.1.3 1.5.4 3 .4 4.5v21.6zM251.4 80.9V50h10.3v30.8h-10.3zM261.8 39c0 .7-.1 1.4-.4 2-.2.6-.6 1.2-1 1.6-.4.5-1 .8-1.6 1.1-.6.3-1.3.4-2.1.4s-1.5-.1-2.1-.4c-.7-.3-1.2-.6-1.7-1.1-.5-.5-.8-1-1.1-1.6-.3-.6-.4-1.3-.4-2s.1-1.4.4-2c.3-.6.7-1.2 1.1-1.7.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2-.4s1.4.1 2 .4c.6.3 1.2.6 1.6 1.1.5.5.8 1 1.1 1.7.4.6.6 1.3.6 2z"/>
			  </motion.g> 
			</motion.svg>
			</div>
		</Link>
	)
}

export default SVGMartin