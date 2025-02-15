const path = require("path");
const DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: path.resolve(__dirname, ".."),
    filename: "react-scroll-to.js",
    library: ["react-scroll-to"],
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  context: path.resolve(__dirname, ".."),
  resolve: {
    modules: [path.resolve(__dirname, "..", "src"), "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  externals: [
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],
  module: {
    rules: [
      {
        test: /.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /.(ts|tsx)$/,
        loader: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json")
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};
