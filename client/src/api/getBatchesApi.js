import axiosApi from '../utils/axiosApi';

const getBatchesApi = {
  async getBatches() {
    try {
      const response = await axiosApi.get('/batches/get');
      const batchData = response.data;
      return batchData;
    } catch (err) {
      console.log(err);
    }
  },
};

export default getBatchesApi;