import {
    videoConstants
} from "./constants";
import axios from "../helpers/axios";

export const getInitialData = () => {
    return async (dispatch) => {
        const res = await axios.post(`/initialData`);
        if (res.status === 200) {
            const { video } = res.data;
            dispatch({
                type: videoConstants.LOAD_ALL_VIDEO_SUCCESS,
                payload: { video },
            });
            console.log(res);
        };
    };
}