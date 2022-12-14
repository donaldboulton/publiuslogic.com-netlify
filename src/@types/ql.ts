export type GraphQLType<QueryName extends string, T> = {
  [P in QueryName]: {
    nodes: T
  }
}

export type GraphQLDataType<QueryName extends string, T> = {
  [P in QueryName]: T
}
