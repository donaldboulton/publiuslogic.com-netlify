import { graphql, useStaticQuery } from 'gatsby'

const postQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { slug: { regex: "/^blog/" }, frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          title
          description
          author
          imageLink
          date(formatString: "YYYY-MM-DD")
          tags
          category
        }
        slug
        excerpt(pruneLength: 200, truncate: true)
      }
    }
  }
`

export type PostType = {
  frontmatter: {
    title: string
    description: string
    author: string
    date: string
    category: string
    tags: string[]
    imageLink: string
  }
  slug: string
  excerpt: string
}
type PostQueryType = {
  allMdx: {
    nodes: PostType[]
  }
}

const GetPosts = (tag?: string) => {
  const data: PostQueryType = useStaticQuery(postQuery)
  const posts = data.allMdx.nodes.filter(node => new Date(node.frontmatter.date) <= new Date())
  return tag ? posts.filter(node => node.frontmatter.tags.includes(tag)) : posts
}
export default GetPosts
