import { useQuery } from "@tanstack/react-query";

import { fetchMarkets } from "../api/market";

const useMarket = () => {
    const {
        isLoading,
        error,
        data: markets,
    } = useQuery({
        queryKey: ['markets'],
        queryFn: fetchMarkets,
        refetchInterval: 0,
    })

    return {
        isLoading,
        error,
        markets,
    }
}

export default useMarket;