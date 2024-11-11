import useMarket from '../hooks/useMarket';

import MarketTab from '../components/MarketTab';
import MarketsContext from '../store/markets-context';

const Market = () => {
  const { isLoading, markets, error } = useMarket();
  return (
    <MarketsContext.Provider value={{ markets: markets?.results }}>
      <div className='flex flex-col gap-3 mx-20 relative'>
        <section>
          <h1 className='font-bold text-2xl'>قیمت ارزهای دیجیتال</h1>
          <p className='text-sm text-gray-400'>فروش و خرید ارز دیجیتال با امنیت بالا</p>
        </section>

        {isLoading && <p>Data is loading...</p>}
        {markets && <MarketTab />}
      </div>
    </MarketsContext.Provider>
  )
}

export default Market