// import React from "react"
// import { graphql } from "gatsby"
// import { Layout } from "../components/layout"

// const Post = ({ data }) => {
//   return (
//     <Layout>

//     <article className="myContainer">
//       <h1>{data.wpPost.title}</h1>
//       <div dangerouslySetInnerHTML={{__html: data.wpPost.content}} />
//     </article>

//     </Layout>
//   )
// }

// export default Post

// export const query = graphql`
//   query($id: String!) {
//     wpPost(id: {eq: $id}) {
//       title
//       content
//     }
//   }
// `