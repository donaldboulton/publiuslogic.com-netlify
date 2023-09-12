import { GatsbyNode } from 'gatsby'
import path from 'path'
import { copyLibFiles } from '@builder.io/partytown/utils'

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'))
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    const regex = [/node_modules\/leaflet/, /node_modules\\leaflet/]
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: regex,
            use: loaders.null(),
          },
        ],
      },
    })
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
      siteUrl: String!
      description: String!
    }

    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }

    type MdxFrontmatter {
      image: File @fileByRelativePath
    }
  `)
}

const tagTemplate = path.resolve('src/templates/tag-template.tsx')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    query {
      categories: allMdx {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
      tags: allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `)
  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const tags = data.tags.group
  tags.forEach(({ fieldValue }) =>
    createPage({
      path: `tags/${fieldValue}`.toLowerCase(),
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    })
  )
}
