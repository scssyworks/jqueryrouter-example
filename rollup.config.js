import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/js/demo/demo.js",
        output: {
            file: "dist/demo/demo.js",
            format: "iife",
            sourcemap: true
        },
        plugins: [
            postcss({
                extensions: ['.css'],
                minimize: true,
                sourceMap: true,
                extract: true
            }),
            resolve({
                mainFields: ["main"],
                customResolveOptions: {
                    moduleDirectory: "node_modules"
                }
            }),
            commonjs({
                namedExports: {
                    "silkrouter": ["router", "route", "unroute"]
                }
            }),
            babel(),
            terser()
        ]
    }
]