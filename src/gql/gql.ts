/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query ProjectGetBySlug($slug: String!) {\n  projects(where: {slug: $slug}) {\n    ...ProjectListItem\n  }\n}": types.ProjectGetBySlugDocument,
    "fragment ProjectListItem on Project {\n  id\n  description\n  name\n  technologies\n  project_status\n  liveUrl\n  codeUrl\n  image {\n    id\n    url\n    fileName\n  }\n  slug\n  category\n}": types.ProjectListItemFragmentDoc,
    "query ProjectGetList {\n  projects {\n    ...ProjectListItem\n  }\n}": types.ProjectGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProjectGetBySlug($slug: String!) {\n  projects(where: {slug: $slug}) {\n    ...ProjectListItem\n  }\n}"): typeof import('./graphql').ProjectGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProjectListItem on Project {\n  id\n  description\n  name\n  technologies\n  project_status\n  liveUrl\n  codeUrl\n  image {\n    id\n    url\n    fileName\n  }\n  slug\n  category\n}"): typeof import('./graphql').ProjectListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProjectGetList {\n  projects {\n    ...ProjectListItem\n  }\n}"): typeof import('./graphql').ProjectGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
