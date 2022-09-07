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
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
      allWpCategory {
        edges {
          node {
            name
            id
            slug
            posts {
              nodes {
                title
              }
            }
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  }

  result.data.allWpPost.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })

  const blogPostPerPage = 4
  const blogPosts = result.data.allWpPost.edges.length
  const blogPages = Math.ceil(blogPosts / blogPostPerPage)

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: blogPostPerPage * i,
        limit: blogPostPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      },
    })
  })

  result.data.allWpCategory.edges.forEach(({ node }) => {
    const catPostPerPage = 2
    const catPosts = node.posts.nodes.length
    const catPages = Math.ceil(catPosts / catPostPerPage)
    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path: 
          i === 0
            ? `/cat/${node.slug}/`
            : `/cat/${node.slug}/${i + 1}`,
        component: path.resolve(`./src/templates/cat-template.js`),
        context: {
          catid: node.id,
          catname: node.name,
          catslug: node.slug,
          skip: catPostPerPage * i,
          limit: catPostPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === catPages,
        },
      })
    })
  })
}