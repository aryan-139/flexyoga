import axiosApi from "../utils/axiosConfig";

export const registerPayment= async(postData)=>{
    try{
        const response=await axiosApi.post('/payment/confirm', postData);
        console.log(response);
        return {status: response.status, ...response.data};
    }
    catch(error){
        console.log(error);
        return {status: 400};
    }
}