import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config";
import { Dashboard } from "../models/dashboard";

export default function getDashboards(): Promise<Dashboard[]> {
  return axios
    .get(`${config.baseUrl}/dashboards`, {
      headers: {
        Authorization: config.authorizationHeader,
      },
    })
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
}
