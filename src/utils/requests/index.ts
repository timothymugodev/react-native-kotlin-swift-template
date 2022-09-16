import axios, { type AxiosError } from 'axios';
import perf from '@react-native-firebase/perf';
import { CONFIG } from '@example/config/index';


axios.interceptors.request.use(async function (config) {
  try {
    const httpMetric = perf().newHttpMetric(String(config.url), <any>config.method);
    config.data = { httpMetric };

    await httpMetric.start();
  } finally {
    return config;
  }
});

axios.interceptors.response.use(
    async function (response) {
      try {
        // Request was successful, e.g. HTTP code 200
  
        const { httpMetric } = response.config.data;
  
        // add any extra metric attributes if needed
        // httpMetric.putAttribute('userId', '12345678');
  
        httpMetric.setHttpResponseCode(response.status);
        httpMetric.setResponseContentType(response.headers['content-type']);
        await httpMetric.stop();
      } finally {
        return response;
      }
    },
    async function (error: AxiosError ) {
      try {
        // Request failed, e.g. HTTP code 500
  
        const { httpMetric } = error.config.data;
  
        // add any extra metric attributes if needed
        // httpMetric.putAttribute('userId', '12345678');

        if (error.response) {
          httpMetric.setHttpResponseCode(error.response.status);
          httpMetric.setResponseContentType(error.response.headers['content-type']);
        }
  
        await httpMetric.stop();
      } finally {
        // Ensure failed requests throw after interception
        return Promise.reject(error);
      }
    },
  );

const instance = axios.create({
    baseURL: CONFIG.API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default instance;