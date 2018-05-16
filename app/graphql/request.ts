import { GraphQLClient } from 'graphql-request'

function request (githubToken: string, query: object) {
  const q = `{
    query ${query}
  }`

  const graphqlClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      Authorization: `Bearer ${githubToken}`
    }
  })

  return graphqlClient.request(q)
}

export default request
