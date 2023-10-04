const dotenv = require("dotenv");
dotenv.config();

const url = new URL("/graphql", process.env.NEXT_PUBLIC_API_BASE_URL).href;

module.exports = {
  schema: url,
  documents: "**/*.graphql",
  extensions: {
    codegen: {
      overwrite: true,
      schema: url,
      documents: "**/*.graphql",
      generates: {
        "src/core/graphql/index.ts": {
          config: {
            preResolveTypes: false,
            scalars: {},
          },
          plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
        },
      },
    },
  },
};
