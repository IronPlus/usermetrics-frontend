import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config";
import { Post } from "../models/post";

export default function getPostsByPageNum(page: number): Promise<Post[]> {
  return axios
    .get(`${config.baseUrl}/posts/${page}`, {
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
