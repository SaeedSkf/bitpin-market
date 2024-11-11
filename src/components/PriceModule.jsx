import PriceRow from '../ui/PriceRow'

const PriceModule = ({ markets }) => {
    return (
        <div className='flex flex-col'>
            {markets.map((market) =>
                <PriceRow
                    key={market.id}
                    firstImage={market.currency1.image}
                    secondImage={market.currency2.image}
                    title={market.currency1.title_fa}
                    code1={market.currency1.code}
                    code2={market.currency2.code}
                    price={market.price}
                    currency={market.currency2.title_fa}
                />
            )}
        </div>
    )
}

export default PriceModule