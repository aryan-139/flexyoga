import axiosApi from "../utils/axiosConfig";

export const registerPayment= async(postData)=>{
    try{
        const response=await axiosApi.post('/payment/confirm', postData);
        return {status: response.status, data: response.data};
    }
    catch(error){
        console.log(error);
        return error.response.data;
    }
}