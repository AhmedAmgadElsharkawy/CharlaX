import axios from "axios";
import {useAuthStore} from "../store/useAuthStore"

// When you use Vite (the build tool you’re using here), it injects a special object called import.meta.env into your code
// While developing (vite / npm run dev):
// import.meta.env.MODE is "development", so baseURL becomes
// http://localhost:5001/api — your local backend.

// When you run npm run build (production bundle):
// The mode defaults to "production", so baseURL becomes just "/api".
// That assumes your frontend and backend are served from the same origin in prod.
const baseConfig = {
    baseURL:
        import.meta.env.MODE === "development"
            ? "http://localhost:5001/api"
            : "/api",
    withCredentials: true,
};

const axiosInstance = axios.create(baseConfig);

// refreshAxios has the same config but no interceptors
const refreshAxios = axios.create(baseConfig);


axiosInstance.interceptors.response.use(
    respond => respond,
    async (error) => {
        if (error.response?.status == 401) {
            try {
                await refreshAxios.get("/auth/refresh")
                console.log("refresh")
                return axiosInstance(error.config);
            } catch (refreshError) {
                console.error("Refresh failed", refreshError);
                useAuthStore.getState().logout()
            }
        }
        return Promise.reject(error)
    }
)

export { axiosInstance }