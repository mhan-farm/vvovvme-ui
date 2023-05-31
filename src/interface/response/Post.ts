import { User } from "./User";

export interface Post {
  post_id: number;
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
