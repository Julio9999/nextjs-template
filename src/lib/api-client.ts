import { useMainStore } from "@/stores/main-store/main-store";

export const apiClient = () => useMainStore.getState().apiClient;
