import { API } from "./axios";

interface IItems {
  map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): any;
  id: number;
  name: string;
  categoryId: number;
  title: string;
  price: number;
  date: Date;
}

export default async function getItems(
  page: number,
  filter = 0,
  limit = 5
): Promise<IItems[]> {
  const res = await API.get<IItems[]>(
    `/items?${
      filter ? `categoryId=${filter}` : ""
    }&_page=${page}&_limit=${limit}`
  );
  return res.data;
}
