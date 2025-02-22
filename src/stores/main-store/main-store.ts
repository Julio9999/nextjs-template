import { AxiosInstance } from "axios";
import { create, StateCreator } from "zustand";

interface MainStoreState {
  name: string;
  apiClient: AxiosInstance;
  setApiClient: (apiClient: AxiosInstance) => void;
}

const MainStoreApi: StateCreator<MainStoreState> = (set) => ({
  name: "",
  apiClient: {} as AxiosInstance,
  setApiClient: (apiClient) => set({apiClient})
});

export const useMainStore = create<MainStoreState>()(MainStoreApi);

