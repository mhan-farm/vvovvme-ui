import { atom } from "recoil";

export interface TestPost {
  id: number;
  title: string;
  subPosts: TestSubpost[];
}

export interface TestSubpost {
  id: number;
  title: string;
  subPosts: TestSubpost[];
}
export const postsState = atom<TestPost[]>({
  key: "posts",
  default: [
    {
      id: 1,
      title: "title1",
      subPosts: [
        {
          id: 4,
          title: "title4",
          subPosts: [
            { id: 10, title: "title10", subPosts: [] },
            { id: 11, title: "title11", subPosts: [] },
          ],
        },
        { id: 5, title: "title5", subPosts: [] },
        { id: 6, title: "title6", subPosts: [] },
      ],
    },
    {
      id: 2,
      title: "title2",
      subPosts: [
        { id: 7, title: "title7", subPosts: [] },
        { id: 8, title: "title8", subPosts: [] },
        { id: 9, title: "title9", subPosts: [] },
      ],
    },
    { id: 3, title: "title3", subPosts: [] },
  ],
});
