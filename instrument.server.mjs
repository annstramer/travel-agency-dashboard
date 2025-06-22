import * as Sentry from "@sentry/react-router";

Sentry.init({
    dsn: "https://b846e33deb1471a899181f15e9d6b4d9@o4509523174621184.ingest.de.sentry.io/4509523186155600",

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
});
