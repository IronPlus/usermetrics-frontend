import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config";
import { Post } from "../models/post";
import createBasicAuthHeader from "./auth-service";

export default function getPostsByPageNum(page: number): Promise<Post[]> {
  return axios
    .get(`${config.baseUrl}/posts/${page}`, {
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
