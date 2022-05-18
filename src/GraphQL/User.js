import { gql } from "@apollo/client";


export const GetUserByUsername = gql`
query getUser($_eq: String, $_eq1: String) {
  users(where: {username: {_eq: $_eq}, password: {_eq: $_eq1}}) {
    email
    id
    password
    username
  }
}

`

export const listAuth = gql`
query MyQuery {
  users {
    email
    id
    password
    username
  }
}
`
export const InsertAuth = gql`
mutation MyMutation($object: users_insert_input = {}) {
  insert_users_one(object: $object) {
    id
  }
}

`