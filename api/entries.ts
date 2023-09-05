import { gql } from "@apollo/client";

export const getEntries = gql`
  query Query  {
    getEntries {
      date, time
    }
  }
`

export const postEntries = gql`
mutation Mutation($name: String, $phone: String, $service: String, $category: String, $date: String, $time: String) {
  createEntry(name: $name, pfhone: $phone, service: $service, category: $category, date: $date, time: $time) {
    date
    time
  }
}
`
