import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    // build: {
    //     minify: false,
    //     terserOptions: {
    //         compress: false,
    //         mangle: false,
    //     },
    // },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
