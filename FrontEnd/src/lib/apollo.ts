import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cle37c4qw0ekg01ur6x049p6y/master",
    cache: new InMemoryCache()
})