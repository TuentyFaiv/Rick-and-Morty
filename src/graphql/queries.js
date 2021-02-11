import { gql } from '@apollo/client';

export const CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter){
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        episode {
          id
          name
          air_date
          episode
          created
        }
        created
      }
    }
  }
`;
