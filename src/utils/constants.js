export const MODE = "dev";
const DEV_API_URL = "https://08d1e9f97dcc.ngrok-free.app";
const PROD_API_URL = "https://spring-madrasda-2f6mra4vwa-em.a.run.app";
export const API_URL = MODE === "dev" ? DEV_API_URL: PROD_API_URL; 