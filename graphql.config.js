require('dotenv').config()

const apiUrl = process.env.SCHEMA_PATH || 'https://api.graphql.jobs/'

module.exports = {
  overwrite: true,
  schema: apiUrl,
  documents: `./apollo/**/*.gql`,
  extensions: {
    codegen: {
      generates: {
        './apollo/': {
          config: {
            reactApolloVersion: 3,
            withHooks: true,
            exportFragmentSpreadSubTypes: true,
          },
          plugins: ['typescript-operations', 'typescript-react-apollo'],
          preset: 'near-operation-file',
          presetConfig: {
            baseTypesPath: '__generated__/types.ts',
            extension: '.ts',
            folder: '__generated__',
          },
        },
        './apollo/__generated__/types.ts': {
          config: {
            namingConvention: 'keep',
          },
          plugins: ['typescript'],
        },
      },
    },
  },
}