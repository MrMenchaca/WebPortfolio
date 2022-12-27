import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = (): JSX.Element => {
  return (
    <main>
		<Layout pageTitle="About me">
			<p>Hey, I'm Carlos Menchaca.</p>
		</Layout>
    </main>
  )
}

export const Head = () => <Seo title="About me" />

export default AboutPage;