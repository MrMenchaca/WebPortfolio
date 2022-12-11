import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ():JSX.Element => {
  return (
    <main>
		<Layout pageTitle="Home Page">
			<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
			<StaticImage
				alt="Selfie of me"
				src="../images/myFace.jpeg"
			/>
		</Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = ():JSX.Element => <title>Home Page</title>

export default IndexPage;