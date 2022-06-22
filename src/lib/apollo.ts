import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4owreks1irl01w7dtvx4kwx/master',
  cache: new InMemoryCache()
})