import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config";
import { Post } from "../models/post";
import createBasicAuthHeaderFromSession from "./auth-service";

export default function getPostsByPageNum(page: number): Promise<Post[]> {
  return axios
    .get(`${config.baseUrl}/posts/${page}`, {
      headers: {
        Authorization: createBasicAuthHeaderFromSession(),
      },
    })
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
}
