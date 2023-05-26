import HttpService from "./HttpService";
import { Response } from "../interface/response/Response";
import { Page } from "../interface/response/Page";
import { Post } from "../interface/response/Post";

const POST_URL = `http://localhost:8080/api/v1/posts`;

const getPosts = async (): Promise<Response<Page<Post>>> => {
  return await HttpService.getAxiosClient()
    .get<Response<Page<Post>>>(POST_URL)
    .then((response) => {
      return response.data;
    });
};

const PostService = {
  getPosts,
};

export default PostService;
