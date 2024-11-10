import { Image } from 'react'
import PriceRow from '../ui/PriceRow'

const PriceModule = ({ markets }) => {
    console.log(markets.results)
    return (
        <div className='flex flex-col gap-3 py-3'>
            {markets.results.map((market) =>
                <PriceRow
                    key={market.id}
                    firstImage={market.currency1.image}
                    secondImage={market.currency2.image}
                    title={market.currency2.title_fa}
                    subtitle={`${market.currency1.code}/${market.currency2.code}`}
                    price={market.price}
                    currency={market.currency2.title_fa}
                />
            )}
        </div>
    )
}

export default PriceModule