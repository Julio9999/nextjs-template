import { apiClient } from "@/lib/api-client";

const getUsers = () => {
   return apiClient().get("/users");
};

export const UsersService = {
   getUsers,
};

