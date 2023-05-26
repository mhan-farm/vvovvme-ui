import { User } from "./User";

export interface Post {
  postId: number;
  title: string;
  content: string;
  author: User;
  comment_count: number;
  like_count: number;
  views: number;
  tags: string;
  created: string;
  updated: string;
}
