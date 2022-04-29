const AUTH0_REDIRECT_URI = process.env.NODE_ENV === "production" ? "https://leo6liu.github.io/auth0-test" : "http://localhost:3000";

export { AUTH0_REDIRECT_URI };
