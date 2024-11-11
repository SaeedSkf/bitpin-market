import React, { useState, useContext } from 'react';

import MarketsContext from '../store/markets-context';
import Tab from '../ui/Tab';
import TabButton from '../ui/TabButton';
import PriceModule from './PriceModule';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useMarketPagination, useTabScrollPositions, FIRST_COIN, SECOND_COIN } from '../hooks/useMarketTab';

const MarketTab = () => {
    const marketsCtx = useContext(MarketsContext);
    const [selectedTab, setSelectedTab] = useState(FIRST_COIN);

    const { paginatedMarkets, hasMore, handleNextPage } = useMarketPagination(marketsCtx.markets, selectedTab);
    const { handleTabChange } = useTabScrollPositions(selectedTab);

    const onTabChange = (coin) => {
        setSelectedTab(handleTabChange(coin));
    };

    return (
        <section className="sticky">
            <Tab
                buttons={
                    <>
                        <TabButton isActive={selectedTab === FIRST_COIN} onClick={() => onTabChange(FIRST_COIN)}>
                            پایه تومان
                        </TabButton>
                        <TabButton isActive={selectedTab === SECOND_COIN} onClick={() => onTabChange(SECOND_COIN)}>
                            پایه تتر
                        </TabButton>
                    </>
                }
            >
                <InfiniteScroll
                    dataLength={paginatedMarkets.length}
                    hasMore={hasMore}
                    next={handleNextPage}
                >
                    <PriceModule markets={paginatedMarkets} />
                </InfiniteScroll>
            </Tab>
        </section>
    );
};

export default MarketTab;