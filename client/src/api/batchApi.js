import axiosApi from "../utils/axiosConfig";

export const getBatch= async()=>{
    try{
        const response = await axiosApi.get('/batches/get');
        return {status: response.status, data: response.data};
    }
    catch(error){
        console.log(error);
        return error.response.data;
    }
}