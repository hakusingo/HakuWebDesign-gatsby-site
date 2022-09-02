const { reporter } = require("gatsby-cli/lib/reporter/reporter")
const { resolutions } = require("gatsby-plugin-sharp")
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  }

  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: node.id,
      },
    })
  })
}