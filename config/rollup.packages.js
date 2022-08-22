import path from "path";
import fs from "fs";
import plugins from "./rollup.plugins";
var srcDirs;
var configs = [];
try {
    srcDirs = fs.readdirSync(path.resolve(__dirname, "../src"));
} catch (_) {
    console.error("读取src文件夹下的文件失败!");
}

/**只读取文件夹,不读取文件 */
srcDirs = srcDirs.filter((str) => !str.includes("."));

srcDirs.forEach((dir) => {
    configs.push(gIndexConfig(dir));
});

function gIndexConfig(dir) {
    const input = path.join(__dirname, "../src", dir, "index.ts");
    return {
        input,
        output: [
            {
                file: `dist/${dir}/index.cjs.js`,
                format: "cjs",
            },
            {
                file: `dist/${dir}/index.es.js`,
                format: "es",
            },
        ],
        plugins,
    };
}

export default configs;
