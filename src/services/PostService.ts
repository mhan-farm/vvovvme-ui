import HttpService from "./HttpService";
import { Response } from "../interface/response/Response";
import { Page } from "../interface/response/Page";
import { Post } from "../interface/response/Post";

const POST_URL = `http://localhost:8080/api/v1/posts`;

const getOrderByCreatedPosts = async (
  size: number
): Promise<Response<Page<Post>>> => {
  return await HttpService.getAxiosClient()
    .get<Response<Page<Post>>>(POST_URL, { params: { size: size } })
    .then((response) => {
      return response.data;
    });
};

const getOrderByLikesOrViewsPosts = async (
  size: number,
  sort: string
): Promise<Response<Page<Post>>> => {
  return await HttpService.getAxiosClient()
    .get<Response<Page<Post>>>(POST_URL, { params: { size: size, sort: sort } })
    .then((response) => {
      return response.data;
    });
};

const PostService = {
  getOrderByCreatedPosts,
  getOrderByLikesOrViewsPosts,
};

export default PostService;
