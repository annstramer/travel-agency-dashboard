import {reactRouter} from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
    org: "frozenbungalo",
    project: "travel-agency",
    // An auth token is required for uploading source maps.
    authToken: "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"
    // ...
};

export default defineConfig(config => {
    return {
        plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
        ssr: {
            noExternal: [/@syncfusion/]
        }
    };
});