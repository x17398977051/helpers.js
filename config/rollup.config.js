import plugins from "./rollup.plugins";
import pkg from "../package.json";

const packageName = pkg.name;
export default {
    input: "./src/index.ts",
    output: [
        {
            file: `dist/${packageName}.cjs.js`,
            format: "cjs",
        },
        {
            file: `dist/${packageName}.es.js`,
            format: "es",
        },
    ],
    plugins: [...plugins],
};
