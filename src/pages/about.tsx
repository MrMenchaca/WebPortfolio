import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = (): JSX.Element => {
  return (
    <main>
		<Layout pageTitle="About me">
			<p>Hey, I'm Carlos Menchaca.</p>
		</Layout>
    </main>
  )
}

export const Head = (): JSX.Element => <title>About Me</title>

export default AboutPage;