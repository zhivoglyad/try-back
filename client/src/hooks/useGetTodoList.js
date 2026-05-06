import { useCallback } from "react";
import { createRequest } from "./createRequest";

export const useGetTodoList = () => {
    const { request } = createRequest();

    const memoized = useCallback(async () => {
        const data = await request('http://localhost:3002/api/todos/list', 'GET');
        if (!data) {
            alert('Ошибка при загрузке списка задач');
        }
        return data;
    }, []);

    return memoized;
};
