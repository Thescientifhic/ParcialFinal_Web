import { Poem } from "../types/poems";

const BASE_URL = "https://poetrydb.org/";

export const getPoems = async (type: string): Promise<Poem[]> => {
  try {
    const response = await fetch(`${BASE_URL}${type}`);
    if (!response.ok) {
      throw new Error(`Error fetching poems: ${response.statusText}`);
    }
    const data = await response.json();
    return data as Poem[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
