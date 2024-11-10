import useMarket from '../hooks/useMarket';

import MarketTab from '../components/MarketTab';

const Market = () => {
  const { isLoading, markets, error } = useMarket();
  return (
    <>
      <div className='flex flex-col gap-3 mx-20'>
        <section>
          <h1 className='font-bold text-2xl'>قیمت ارزهای دیجیتال</h1>
          <p className='text-sm text-gray-400'>فروش و خرید ارز دیجیتال با امنیت بالا</p>
        </section>

        {isLoading && <p>Data is loading...</p>}
        {markets && <MarketTab markets={markets} />}
      </div>
    </>
  )
}

export default Market