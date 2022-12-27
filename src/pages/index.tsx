import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

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

export const Head = () => <Seo title="Home Page" />

export default IndexPage;