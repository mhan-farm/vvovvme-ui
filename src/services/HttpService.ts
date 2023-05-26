import axios, { AxiosInstance } from "axios";

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

const _axios: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const getAxiosClient = () => _axios;

const configure = (token: string) => {
  console.log("axios interceptor setting...");
  getAxiosClient().interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      console.log(error);
    }
  );
};

const HttpService = {
  HttpMethods,
  getAxiosClient,
  configure,
};

export default HttpService;
