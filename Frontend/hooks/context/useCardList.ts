import { CardCategory } from "@/types/category";
import useSWR from "swr";

export const useCardList = (category?: CardCategory) => {
    const url = `/get_all_cards?category=${category}`;
    const SWR = useSWR(url, { refreshInterval: 2000 });
    return SWR;
};
