const BACKEND_IP = process.env.REACT_APP_BACKEND_IP ?? "127.0.0.1:8000"

export const backendUrl = `http://${BACKEND_IP}/api/`
export const config = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Token " + localStorage.getItem("token")
    }
}