import { ArticleInfo } from "./ArticleInfo";

export interface Response {
  data: {
    data: ArticleInfo[];
    total: number;
    page: number;
    limit: number;
    isEnd: boolean;
  };
  message: string;
  status: number;
  extra: object;
  success: boolean;
}
