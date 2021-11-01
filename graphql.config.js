require('dotenv').config()
const apiUrl = process.env.SERVER_API_ENDPOINT

module.exports = {
  overwrite: true,
  schema: apiUrl,
  documents: `./components/**/*.gql`,
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
