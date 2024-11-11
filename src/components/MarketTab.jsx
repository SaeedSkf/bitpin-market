import React, { useState, useEffect } from 'react'

import Tab from '../ui/Tab'
import TabButton from '../ui/TabButton'
import PriceModule from './PriceModule'
import InfiniteScroll from 'react-infinite-scroll-component'

const FIRST_COIN = 'IRT';
const SECOND_COIN = 'USDT';

const MarketTab = ({ markets }) => {
    const [selectedTab, setSelectedTab] = useState(FIRST_COIN)
    const [firsCoinPage, setFirsCoinPage] = useState(1)
    const [secondCoinPage, setSecondCoinPage] = useState(1)

    const currentPage = selectedTab === FIRST_COIN ? firsCoinPage : secondCoinPage
    const currentMarkets = markets.results
        .filter((market) => market.currency2.code === selectedTab)
        .slice(0, currentPage * 10)

    const hasMore = currentMarkets.length < markets.results.filter((market) => market.currency2.code === selectedTab).length

    const handleNextPage = () => {
        if (selectedTab === FIRST_COIN) {
            setFirsCoinPage((prevPage) => prevPage + 1)
        } else {
            setSecondCoinPage((prevPage) => prevPage + 1)
        }
    }

    return (
        <section className='sticky'>

            <Tab
                buttons={
                    <>
                        <TabButton
                            isActive={selectedTab === FIRST_COIN}
                            onClick={() => setSelectedTab(FIRST_COIN)}
                        >
                            پایه تومان
                        </TabButton>
                        <TabButton
                            isActive={selectedTab === SECOND_COIN}
                            onClick={() => setSelectedTab(SECOND_COIN)}
                        >
                            پایه تتر
                        </TabButton>
                    </>
                }
            >
                <InfiniteScroll
                    dataLength={currentMarkets.length}
                    hasMore={hasMore}
                    next={handleNextPage}
                >
                    <PriceModule markets={currentMarkets} />
                </InfiniteScroll>
            </Tab>

        </section >
    )
}

export default MarketTab