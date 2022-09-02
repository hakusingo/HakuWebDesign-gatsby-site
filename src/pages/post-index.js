import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const PostIndex = ({ data }) => {
  return (
    <Layout>
      <main>
        <div className="my-container">
          <div className="max-w-[1000px] mx-auto mt-[4rem]">
            <h2 className="pacifico text-[24px] inline-block">My Blog
              <span className="border border-b-[1px] border-black block w-[85%] -mt-1" />
              <span className="border border-b-[1px] border-black block w-[85%] ml-[1rem] mt-[.1rem]" />
            </h2>
          </div>
          <div className="max-w-[1000px] mx-auto w-full flex-wrap sm:flex sm:justify-around sm:w-[90%]">
            {data.allWpPost.edges.map(({ node }, index ) => (
              <div className="p-[1rem] my-[2rem] bg-black text-white rounded-[5px] sm:w-[45%]" key={index}>
                <Link to={`/${node.slug}/`}>
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
        </div>
      </main>
    </Layout>
  )
}
export default PostIndex

export const query = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          date(formatString: "YYYY年mm月dd日")
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    transformOptions: { cropFocus: CENTER }
                    width: 500
                    height: 280
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