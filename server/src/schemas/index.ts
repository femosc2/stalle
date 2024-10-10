import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Query {
    message: String
    getPixel(x: Int!, y: Int!): Pixel
  }

  type Pixel {
    user: String
    colour: String
    position: Position
  }

  type Position {
    x: Int
    y: Int
  }

  type Mutation {
    setPixel(x: Int!, y: Int!, colour: String!, user: String!): Pixel
  }
`);
