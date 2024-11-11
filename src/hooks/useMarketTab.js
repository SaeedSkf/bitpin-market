import { useState, useEffect, useMemo } from 'react';

export const FIRST_COIN = 'IRT';
export const SECOND_COIN = 'USDT';

export const useMarketPagination = (markets, selectedTab) => {
    const [pages, setPages] = useState({ [FIRST_COIN]: 1, [SECOND_COIN]: 1 });

    const currentPage = pages[selectedTab];
    const paginatedMarkets = useMemo(() => {
        return markets
            .filter((market) => market.currency2.code === selectedTab)
            .slice(0, currentPage * 10);
    }, [markets, selectedTab, currentPage]);

    const hasMore = paginatedMarkets.length < markets.filter((market) => market.currency2.code === selectedTab).length;

    const handleNextPage = () => {
        setPages((prev) => ({
            ...prev,
            [selectedTab]: prev[selectedTab] + 1,
        }));
    };

    return { paginatedMarkets, hasMore, handleNextPage };
};

export const useTabScrollPositions = (selectedTab) => {
    const [scrollPositions, setScrollPositions] = useState({ [FIRST_COIN]: 0, [SECOND_COIN]: 0 });

    const handleTabChange = (newTab) => {
        setScrollPositions((prev) => ({
            ...prev,
            [selectedTab]: window.scrollY,
        }));
        return newTab;
    };

    useEffect(() => {
        window.scrollTo(0, scrollPositions[selectedTab] || 0);
    }, [selectedTab, scrollPositions]);

    return { handleTabChange };
};