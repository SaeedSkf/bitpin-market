import React, { useState } from 'react'
import Tab from '../ui/Tab'
import TabButton from '../ui/TabButton'
import PriceModule from './PriceModule'

const MarketTab = ({ markets }) => {
    const [selectedTab, setSelectedTab] = useState('USDT')

    return (
        <section >
            <Tab
                buttons={
                    <>
                        <TabButton
                            isActive={selectedTab === 'USDT'}
                            onClick={() => setSelectedTab('USDT')}
                        >
                            پایه تومان
                        </TabButton>
                        <TabButton
                            isActive={selectedTab === 'IRT'}
                            onClick={() => setSelectedTab('IRT')}
                        >
                            پایه تتر
                        </TabButton>
                    </>
                }
            >
                <PriceModule markets={markets} />
            </Tab>

        </section>
    )
}

export default MarketTab