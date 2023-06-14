import { gql } from "@apollo/client";

export const getEntries = gql`
  query {
    getEntries {
      id, name, phone, service, category, date, time
    }
  } 
`

export const postEntries = gql`
  mutation createEntry($input: entryInput) {
    createEntry(input: $input) {
      id, date, time
    }
  }
    
`