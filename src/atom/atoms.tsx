import { atom } from "recoil";

export interface TestPost {
  id: number;
  title: string;
  sequence: number;
  isDragDisabled: boolean;
  subPosts: TestPost[];
}

export interface TestPost2 {
  id: number;
  title: string;
}

export interface PostOrder {
  id: number;
  sequence: number;
  isDragDisabled: boolean;
  subPostOrder: PostOrder[];
}

export interface KeyValuePost {
  [key: number]: TestPost2;
}

export interface Test2 {
  posts: KeyValuePost;
  postOrders: PostOrder[];
}

export const postState2 = atom<Test2>({
  key: "posts2",
  default: {
    posts: {
      1: { id: 1, title: "title1" },
      2: { id: 2, title: "title2" },
      3: { id: 3, title: "title3" },
      4: { id: 4, title: "title4" },
      5: { id: 5, title: "title5" },
      6: { id: 6, title: "title6" },
    },
    postOrders: [
      {
        id: 3,
        sequence: 0,
        isDragDisabled: false,
        subPostOrder: [
          { id: 4, sequence: 0, isDragDisabled: false, subPostOrder: [] },
          { id: 5, sequence: 1, isDragDisabled: false, subPostOrder: [] },
          { id: 6, sequence: 2, isDragDisabled: false, subPostOrder: [] },
        ],
      },
      { id: 1, sequence: 1, isDragDisabled: false, subPostOrder: [] },
      { id: 2, sequence: 2, isDragDisabled: false, subPostOrder: [] },
    ],
  },
});

export const postsState = atom<TestPost[]>({
  key: "posts",
  default: [
    {
      id: 1,
      title: "title1",
      sequence: 0,
      isDragDisabled: false,
      subPosts: [
        {
          id: 4,
          title: "title4",
          sequence: 0,
          isDragDisabled: false,
          subPosts: [
            {
              id: 10,
              title: "title10",
              sequence: 0,
              isDragDisabled: false,
              subPosts: [],
            },
            {
              id: 11,
              title: "title11",
              sequence: 1,
              isDragDisabled: false,
              subPosts: [],
            },
          ],
        },
        {
          id: 5,
          title: "title5",
          sequence: 1,
          isDragDisabled: false,
          subPosts: [],
        },
        {
          id: 6,
          title: "title6",
          sequence: 2,
          isDragDisabled: false,
          subPosts: [],
        },
      ],
    },
    {
      id: 2,
      title: "title2",
      sequence: 1,
      isDragDisabled: false,
      subPosts: [
        {
          id: 7,
          title: "title7",
          sequence: 0,
          isDragDisabled: false,
          subPosts: [],
        },
        {
          id: 8,
          title: "title8",
          sequence: 1,
          isDragDisabled: false,
          subPosts: [],
        },
        {
          id: 9,
          title: "title9",
          sequence: 2,
          isDragDisabled: false,
          subPosts: [],
        },
      ],
    },
    {
      id: 3,
      title: "title3",
      sequence: 2,
      isDragDisabled: false,
      subPosts: [],
    },
  ],
});
