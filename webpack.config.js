const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./scss/app.scss", // Entry point for the SCSS file
    output: {
        path: path.resolve(__dirname, "dist/assets/compiled/css"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app2.css", // Output CSS filename
        }),
    ],
};
