import { callApi } from "./apiUtils";

export const getRoom = async (roomId : number) => {
    const response = await callApi('GET', `/rooms/${roomId}`);
    return response.data;
}
