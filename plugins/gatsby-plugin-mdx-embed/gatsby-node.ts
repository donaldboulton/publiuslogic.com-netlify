import { GatsbyNode } from 'gatsby'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createContentDigest,
  createNodeId,
}, pluginOptions) => {
  console.log("sourceNodes")
}