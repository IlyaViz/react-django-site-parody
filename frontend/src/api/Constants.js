export const backendUrl = "http://172.16.0.2:8000/api/"
export const config = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Token " + localStorage.getItem("token")
    }
}