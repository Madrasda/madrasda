export const MODE = "prod";
const DEV_API_URL = "http://localhost:8080";
const PROD_API_URL = "https://spring-madrasda-2f6mra4vwa-em.a.run.app";
export const API_URL = MODE === "dev" ? DEV_API_URL: PROD_API_URL; 