import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../styles/wp-post.scss"
import Seo from "../components/seo"

const Post = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo
        title={data.wpPost.title}
      />
      <main>
        <div className="my-container">
          <article className="mt-[2rem]">
            <h1 className="bg-black text-white text-[500] py-[.5rem] px-[1rem] text-[18px]">{data.wpPost.title}</h1>
            <div id="wp-post" dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
          </article>
          <ul id="page-link" className="flex w-full justify-between mt-[3rem]">
            {pageContext.previous && (
              <li className="">
                <Link to={`/blog/${pageContext.previous.slug}/`} rel="prev">
                  &lt; 前の記事へ
                </Link>
              </li>
            )}
            {pageContext.next && (
              <li className="ml-auto">
                <Link to={`/blog/${pageContext.next.slug}`} rel="next">
                  次の記事へ &gt;
                </Link>
              </li>
            )}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($id: String!) {
    wpPost(id: {eq: $id}) {
      title
      content
    }
  }
`