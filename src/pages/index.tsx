import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ():JSX.Element => {
  return (
    <main>
		<Layout pageTitle="Home Page">
			<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
		</Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = ():JSX.Element => <title>Home Page</title>

export default IndexPage;