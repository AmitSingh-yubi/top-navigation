const babel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const postcss = require("rollup-plugin-postcss");
const filesize = require("rollup-plugin-filesize");
const autoprefixer = require("autoprefixer");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts");
const pkg = require("./package.json");
const json = require('@rollup/plugin-json');

const INPUT_FILE_PATH = "src/yb-core-topnavigation/index.tsx";
const OUTPUT_NAME = "yb-core-topnavigation";

const GLOBALS = {
    react: "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
};

const PLUGINS = [
    postcss({
        extract: true,
        plugins: [autoprefixer],
    }),
    babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
    }),
    resolve({
        browser: true,
        resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/],
    }),
    commonjs(),
    typescript(),
    filesize(),
    json()
];

const EXTERNAL = ["react", "react-dom", "prop-types", "react-native"];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
    {
        file: pkg.browser,
        format: "umd",
    },
    {
        file: pkg.main,
        format: "cjs",
    },
    {
        file: pkg.module,
        format: "es",
    },
];

const config = [
    ...OUTPUT_DATA.map(({ file, format }) => {
        return {
            input: INPUT_FILE_PATH,
            output: {
                file,
                format,
                name: OUTPUT_NAME,
                globals: GLOBALS,
            },
            external: ["cjs", "es"].includes(format)
                ? CJS_AND_ES_EXTERNALS
                : EXTERNAL,
            plugins: PLUGINS,
        };
    }),
    {
        // path to your declaration files root
        input: "./build/dts/yb-core-topnavigation/index.d.ts",
        output: [{ file: "package/dts/index.d.ts", format: "es" }],
        plugins: [dts.default()],
    },
];

module.exports = config;
