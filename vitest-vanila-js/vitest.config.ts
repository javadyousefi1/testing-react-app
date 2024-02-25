// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    includeSource: ["./**/*.{js,ts}"],

    coverage: {
      provider: "v8", // or 'v8'
      reporter: ["text", "json", "html"],
    },
  },
});
