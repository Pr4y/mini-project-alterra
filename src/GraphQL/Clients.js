import { gql } from "@apollo/client";

export const getClients = gql `
query MyQuery($id: Int) {
    clientDetail(where: {user_id: {_eq: $id}}) {
      clientAddress
      clientName
      id
    }
  }  
  
`

export const inputClients = gql`
mutation MyMutation($object: clientDetail_insert_input = {}) {
    insert_clientDetail_one(object: $object) {
      clientAddress
      clientName
      user_id
    }
  }
`
export const deleteClients = gql`
mutation MyMutation($id: Int!) {
    delete_clientDetail_by_pk(id: $id) {
      id
    }
  }
  
`