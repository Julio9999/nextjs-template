"use client"

import { useMainStore } from "@/stores/main-store/main-store";
import axios, { AxiosInstance } from "axios";
import { ReactNode, useEffect } from "react";


interface Props {
    baseURL: string;
    children: ReactNode;
}

export const EnvProvider = ({ baseURL, children }: Props) => {

    const setApiClient = useMainStore(store => store.setApiClient)

    const apiClient = useMainStore(store => store.apiClient)

    useEffect(() => {
        const apiClient: AxiosInstance = axios.create({
            baseURL,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        setApiClient(apiClient)
    }, [baseURL, setApiClient])


    if(Object.keys(apiClient).length === 0) return null;

    return (
        <>
            {children}
        </>
    )

}