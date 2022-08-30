// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allWpPage {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//     allWpPost(sort: {fields: date, order: DESC}) {
//       edges {
//         node {
//           id
//           slug
//         }
//       }
//     }
//   `)

//   /* 固定ページ */
//   result.data.allWpPage.edges.forEach(({ node }) => {
//     createPage({
//       path: `/${node.slug}/`,
//       component: path.resolve("./src/templates/page.js"),
//       context: {
//         id: node.id,
//       },
//     })
//   })

//   /* 投稿ページ */
//   result.data.allWpPost.edges.forEach(({ node }) => {
//     createPage({
//       path: `/blog/${node.slug}/`,
//       component: path.resolve("./src/templates/post.js"),
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }