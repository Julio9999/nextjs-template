import { apiClient } from "@/lib/api-client"

interface Params {
    name: string;
    password: string
}
const login = ({name, password}: Params) => {
    const url = '/auth/login'
    return apiClient().post(url, {name, password})
}

export const AuthService = {
    login
}