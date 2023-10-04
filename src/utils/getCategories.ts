import { graphql, useStaticQuery } from 'gatsby'

export type CategoryType = {
    category: string
    count: number
}

type CategoryQueryType = {
    allMdx: {
        group: {
            category: string
            count: number
        }[]
    }
}

const GetCategories = () => {
    const data: CategoryQueryType = useStaticQuery(categoryQuery)
    return data.allMdx
        .group /* .map(category => ({ category: category.fieldValue, count: category.totalCount })) */
}

export default GetCategories

export const categoryQuery = graphql`
    query {
        allMdx(limit: 2000) {
            group(field: { frontmatter: { category: SELECT } }) {
                category: fieldValue
                count: totalCount
            }
        }
    }
`
