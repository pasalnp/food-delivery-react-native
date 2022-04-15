import axios from 'axios';
import promise from 'promise';
import { AsyncStorage } from 'react-native';
var axiosInstance = axios.create();

// export const getDataFromStorage = async (name) => {
//     return await AsyncStorage.getItem(name);
//   };
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = "Token";
    if (accessToken) {
      config.headers.authorization = accessToken;
    }
    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      
    } else {
      return promise.reject(error);
    }
  }
);

export default axiosInstance;
