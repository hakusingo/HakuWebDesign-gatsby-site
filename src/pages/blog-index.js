import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <div>
        <h2>hallow</h2>
        <div className="alignwide">
          {data.allWpPost.edges.map(({ node }) => (
            <article key={node.id}>
              <h2>
                {node.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${node.excerpt.slice(0, 80)}...`
                }}
              />
              <div className="more">
                <Link to={`/blog/${node.slug}/`}>
                  → More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    allWpPost(sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`