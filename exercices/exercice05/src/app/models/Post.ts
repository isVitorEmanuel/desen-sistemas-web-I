export interface Post {
  categories: Array<"Geek" | "Games">;
  title: string;
  date: string;
  author: string;
  description: string;
  img_url: string;
}
