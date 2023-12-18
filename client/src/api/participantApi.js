import axiosApi from "../utils/axiosConfig";

export const registerParticipant= async(postData)=>{
    try{
        const response = await axiosApi.post('/participants/add', postData);
        return {status: response.status, data: response.data};
    }
    catch(error){
        console.log(error);
        return error.response.data;
    }
}