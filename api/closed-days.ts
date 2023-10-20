import { gql } from "@apollo/client";

export const getClosedDays = gql`
  query Query {
    getClosedDaysForUser {
      id
      date
  }
}
`
