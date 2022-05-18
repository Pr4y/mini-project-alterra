import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://alta-mini-project.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "o4DN1TaeVxhPiDYOKJtfHF9aS2pionURHoHDWy2d8bF31E796ZJ97deObd0U9Yo3",
    }
});

export default client;