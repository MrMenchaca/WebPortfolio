import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type SeoProps = {
	title: string;
};

const Seo = ({ title }: SeoProps): JSX.Element => {
  	const data = useStaticQuery(graphql`
    	query {
      		site {
        		siteMetadata {
          			title
        		}
      		}
    	}
  	`);

  	return (
    	<title>{title} | {data.site.siteMetadata.title}</title>
  	);
}

export default Seo;	