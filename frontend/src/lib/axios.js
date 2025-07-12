import axios from "axios";

export const axiosInstance = axios.create({
    // When you use Vite (the build tool you’re using here), it injects a special object called import.meta.env into your code
    // While developing (vite / npm run dev):
    // import.meta.env.MODE is "development", so baseURL becomes
    // http://localhost:5001/api — your local backend.

    // When you run npm run build (production bundle):
    // The mode defaults to "production", so baseURL becomes just "/api".
    // That assumes your frontend and backend are served from the same origin in prod.

    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true,
});