import { gql } from '@apollo/client';


export const CHARACTER = gql`
  query Character($id: ID!) {
    item: character(id: $id) {
      image
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
      }
      location {
        id
        name
        type
        dimension
      }
      episodes: episode {
        id
        name
        air_date
        episode
      }
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
          dimension
        }
        location {
          name
        }
        image
      }
    }
  }
`;

export const CHARACTERS_BY_IDS = gql`
  query CharacterByIds($ids: [ID!]!) {
    characters: charactersByIds(ids: $ids) {
      id
      name
      status
      species
      type
      gender
      origin {
        dimension
      }
      location {
        name
      }
      image
    }
  }
`;

export const LOCATION = gql`
  query Location($id: ID!) {
    item: location(id: $id) {
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
    locations: locationsByIds(ids: $ids) {
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
    item: episode(id: $id) {
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
    episodes: episodesByIds(ids: $ids) {
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
