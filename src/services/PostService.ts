import HttpService from "./HttpService";
import { Response } from "../interface/response/Response";
import { Page } from "../interface/response/Page";
import { Post } from "../interface/response/Post";

const POST_URL = `http://localhost:8080/api/v1/posts`;

const getOrderBySortPosts = async (
  page: number,
  size: number,
  sort: string
): Promise<Response<Page<Post>>> => {
  return await HttpService.getAxiosClient()
    .get<Response<Page<Post>>>(POST_URL, {
      params: { page: page, size: size, sort: sort },
    })
    .then((response) => {
      return response.data;
    });
};

const getPosts = async (): Promise<Response<Page<Post>>> => {
  return await HttpService.getAxiosClient()
    .get<Response<Page<Post>>>(POST_URL, {})
    .then((response) => {
      return response.data;
    });
};

const PostService = {
  getOrderBySortPosts,
  // getPosts,
};

export default PostService;
