import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/wp-post.scss"

const App = ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <Seo
        title={`CATEGORY: ${pageContext.catname}`}
        description={`「${pageContext.catname}」カテゴリーの記事です`}
      />
      <main>
        <div className="my-container">
          <div className="max-w-[1000px] mx-auto mt-[4rem]">
            <h2 className="pacifico text-[24px] inline-block">My Blog { pageContext.catname }
              <span className="border border-b-[1px] border-black block w-[85%] -mt-1" />
              <span className="border border-b-[1px] border-black block w-[85%] ml-[1rem] mt-[.1rem]" />
            </h2>
          </div>
          <div className="max-w-[1000px] mx-auto w-full flex-wrap sm:flex sm:justify-around sm:w-[90%]">
            {data.allWpPost.edges.map(({ node }, index ) => (
              <div className="p-[1rem] my-[2rem] bg-black text-white rounded-[5px] sm:w-[45%]" key={index}>
                <Link to={`/blog/${node.slug}/`}>
                  <figure>
                    {node.featuredImage ? (
                      <GatsbyImage
                        className="flex justify-center"
                        image={
                          node.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                        }
                        alt={
                          node.featuredImage.node.altText ? node.featuredImage.node.altText : ""
                        }
                        style={{ aspectRatio: "25/14" }}
                      />
                    ) : (
                      <StaticImage
                        src={`../images/img-thumbnail.jpg`}
                        alt=""
                        style={{aspectRatio: "25/14" }}
                      />
                    )}
                  </figure>
                  <h2 className="px-[1rem] my-[1rem] font-[500]">{node.title}</h2>
                </Link>
              </div>
            ))}
          </div>
          <ul id="page-link" className="flex justify-between max-w-[1000px] mx-auto">
            {!pageContext.isFirst && (
              <li>
                <Link
                  to={
                    pageContext.currentPage === 2
                      ? `/cat/${pageContext.catslug}`
                      : `/cat/${pageContext.catslug}/${pageContext.currentPage - 1}/`
                  }
                  rel="prev"
                >
                &lt; 前のページ
                </Link>
              </li>
            )}
            {!pageContext.isLast && (
              <li className="ml-auto">
                <Link to={`/cat/${pageContext.catslug}/${pageContext.currentPage + 1}/`} rel="next">
                  次のページ &gt;
                </Link>
              </li>
            )}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default App

export const query = graphql`
  query($catid: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      sort: {order: DESC, fields: date}
      skip: $skip
      limit: $limit
      filter: {categories: {nodes: {elemMatch: {id: {eq: $catid}}}}}
    ) {
      edges {
        node {
          title
          id
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    transformOptions: { cropFocus: CENTER }
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`