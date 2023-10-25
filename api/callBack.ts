import { gql } from "@apollo/client";

export const postCallBack = gql`
mutation Mutation($date: String, $phone: String, $name: String) {
  postCallBackPhone(date: $date, phone: $phone, name: $name) {
    id
  }
}
`