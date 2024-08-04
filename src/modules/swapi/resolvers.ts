import { Context } from "apollo-server-core";
import { GraphQLFieldResolver } from "graphql";
import fetch from "node-fetch";

type Args = { id: string };

const Query: Record<string, GraphQLFieldResolver<{}, Context, any>> = {
  swapiCharacterById: async (_, args: Args, ctx) => {
    const response = await fetch(`https://swapi.dev/api/people/${args.id}/`);
    const data = await response.json();
    console.log(data);
    return data;
  },
};

const StarWarsCharacter = {
  name: (character: any) => character.name,
  height: (character: any) => character.height,
  mass: (character: any) => character.mass,
  gender: (character: any) => character.gender.toUpperCase(),
};

export default {
  Query,
  StarWarsCharacter,
};