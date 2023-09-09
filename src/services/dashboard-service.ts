import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config";
import { Dashboard } from "../models/dashboard";
import createBasicAuthHeader from "./auth-service";

export default function getDashboards(): Promise<Dashboard[]> {
  return axios
    .get(`${config.baseUrl}/dashboards`, {
      headers: {
        Authorization: createBasicAuthHeader(),
      },
    })
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
}
