import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
export default [
    resolve(),
    typescript(),
    babel({
        exclude: "node_modules/**",
    }),
];
