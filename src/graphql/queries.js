import { gql } from '@apollo/client';


export const CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
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
`;

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

export const CHARACTERS_BY_IDS = gql`
  query CharacterByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
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
`;

export const LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        name
      }
      created
    }
  }
`;

export const LOCATIONS = gql`
  query Locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          name
        }
        created
      }
    }
  }
`;

export const LOCATIONS_BY_IDS = gql`
  query LocationByIds($ids: [ID!]!) {
    locationsByIds(ids: $ids) {
      id
      name
      type
      dimension
      residents {
        name
      }
      created
    }
  }
`;

export const EPISODE = gql`
  query Episode($id: ID!) {
    episode {
      id
      name
      air_date
      episode
      characters {
        name
      }
      created
    }
  }
`;

export const EPISODES = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
        created
      }
    }
  }
`;
export const EPISODES_BY_IDS = gql`
  query EpisodesByIds($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
      characters {
        name
      }
      created
    }
  }
`;
