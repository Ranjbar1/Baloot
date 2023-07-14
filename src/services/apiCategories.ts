import { API } from "./axios";

interface ICategory {
  id: number;
  name: string;
}

export async function getCaegories() {
  const res = await API.get<ICategory[]>("/categories");
  return res.data;
}
