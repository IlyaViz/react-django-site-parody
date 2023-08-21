import { getCookie } from "../utils/cookie"

// in development will be used REACT_APP_BACKEND_IP, in production second ip;
// the second ip must be replaced with server ip
const BACKEND_IP = process.env.REACT_APP_BACKEND_IP ?? "127.0.0.1"

export const backendUrl = `http://${BACKEND_IP}/backend/api/`
export const config = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Token " + localStorage.getItem("token"),
        "X-CSRFToken": getCookie("csrftoken")
    }
}