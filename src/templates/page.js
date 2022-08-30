// import React from "react"
// import { graphql } from "gatsby"
// import { Layout } from "../components/layout"

// const Page = ({ data }) => {
//   return (
//     <Layout>
//       <article className="myContainer">
//         <h1>{data.wpPage.title}</h1>
//         <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
//       </article>
//     </Layout>
//   )
// }

// export default Page

// export const query = graphql`
//   query($id: String!) {
//     wpPage(id: {eq: $id}) {
//       title
//       content
//     }
//   }
// `