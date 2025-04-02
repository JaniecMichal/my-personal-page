import { ProjectGetBySlugDocument, ProjectGetListDocument, ProjectListItemFragment, type TypedDocumentString } from "../gql/graphql";

// Define project type to match what's expected by the components
export type ProjectType = ProjectListItemFragment

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.NEXT_PUBLIC_GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
			'Authorization': `Bearer ${process.env.HYGRAPH_TOKEN}`,
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const getProjectsList = async () => {
	const response = await executeGraphql(ProjectGetListDocument, {});

    if (!response || !response.projects) {
		throw Error("Something went wrong");
	}


	return response.projects;
};

export const getProjectBySlug = async (slug: string) => {
	const response = await executeGraphql(ProjectGetBySlugDocument, { slug });

	if (!response || !response.projects) {
		throw Error("Project not found");
	}

	return response.projects;
};