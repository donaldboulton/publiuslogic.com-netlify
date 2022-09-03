const indexName = 'Posts'

const postQuery = `{
  posts: allMdx(
    filter: { fileAbsolutePath: { regex: "/blog/" } }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          path
          date(formatString: "MMM D, YYYY")
          tags
        }
        slug
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

function postToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  }
}
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: ['excerpt:20'] },
  },
]

module.exports = queries
