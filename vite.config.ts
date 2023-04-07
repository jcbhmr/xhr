import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const config = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
  // plugins: [dts()],
});

export default config;
